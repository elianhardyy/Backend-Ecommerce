using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using products.Data;
using products.Models;

namespace products.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ProductsController : ControllerBase
{
    private readonly ProductContext _context;
    private readonly IWebHostEnvironment _host;
    public ProductsController(ProductContext context, IWebHostEnvironment host)
    {
        _context = context;
        _host = host;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Products>> GetProduct()
    {
        return _context.products.ToList();
    }
    [HttpGet("page")]
    public IActionResult GetPage([FromQuery(Name ="s")]string s, [FromQuery(Name ="sort")]string sort, [FromQuery(Name ="page")]int page)
    {
        return Ok(Query(s,sort,page));
    }

    [HttpPost]
    public async Task<ActionResult<Products>> AddProduct([FromForm]Products product)
    {
        product.Image = await SaveImage(product.ImageFile);
        _context.products.Add(product);
        await _context.SaveChangesAsync();
        return Ok(product);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<Products>> UpdateProduct(int id, [FromForm]Products product)
    {
        product.Image = await SaveImage(product.ImageFile);
        if(id != product.Id)
        {
            return BadRequest();
        }
        _context.Entry(product).State = EntityState.Modified;
        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ProductExists(id))
            {
                return NotFound();
            }else{
                throw;
            }
            
        }
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<Products>> DeleteProducts(int id)
    {
        var productsModel = await _context.products.FindAsync(id);
        if(productsModel == null)
        {
            return NotFound();
        }
        _context.products.Remove(productsModel);
        await _context.SaveChangesAsync();

        return productsModel;
    }
    private bool ProductExists(int id)
    {
        return _context.products.Any(p => p.Id == id);
    }
    [NonAction]
    public async Task<string> SaveImage(IFormFile imageFile)
    {
        string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
        imageName = imageName + DateTime.Now.ToString("yymmssffff") + Path.GetExtension(imageFile.FileName);
        var imagePath = Path.Combine(_host.ContentRootPath,"Images",imageName);
        using(var fileStream = new FileStream(imagePath,FileMode.Create))
        {
            await imageFile.CopyToAsync(fileStream);
        }
        return imageName;
    }
    [NonAction]
    public Object Query(string s, string sort, int? queryPage)
    {
        var query = (from products in _context.products select products);

        //searching
        if(!string.IsNullOrEmpty(s))
        {
            query = query.Where(p => p.Title.Contains(s) || p.Description.Contains(s) );

        }

        //sorting
        if(sort == "asc"){
            query = query.OrderBy(p => p.Price);
        }else if(sort == "desc"){
            query = query.OrderByDescending(p=>p.Price);
        }

        //pagination
        int perPage = 5;
        int page = queryPage.GetValueOrDefault(1)== 0 ? 1 : queryPage.GetValueOrDefault(1);
        var total = query.Count();
        return new{
            data = query.Skip((page-1)+perPage).Take(perPage),total,page,
            last_page = total/perPage
        };
    }
}