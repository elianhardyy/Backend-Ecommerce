using Microsoft.EntityFrameworkCore;
using products.Models;

namespace products.Data;

public class ProductContext : DbContext
{
    public ProductContext(DbContextOptions<ProductContext> options) : base(options){}

    public DbSet<Products> products {get; set;}
}