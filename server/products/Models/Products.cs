using System.ComponentModel.DataAnnotations.Schema;

namespace products.Models;

public class Products
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string Image { get; set; }
    public float Price { get; set; }

    [NotMapped]
    public IFormFile ImageFile {get; set; }

}