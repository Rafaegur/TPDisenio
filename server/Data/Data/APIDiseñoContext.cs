using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection.Emit;
using Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Data.Data
{
    public partial class TP3DBContext : DbContext
    {
        public TP3DBContext(DbContextOptions<TP3DBContext> options) : base(options)
        {
        }
        /*Agrega la tabla Direccon con dbset*/
        public virtual DbSet<Direccion> Direccion { get; set; }
        public virtual DbSet<Propietario> Propietario { get; set; }
        public virtual DbSet<Inmueble> Inmueble { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=TP3Api;Persist Security Info=True;Password=M6859aml#;Username=postgres");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            OnModelCreatingPartial(modelBuilder);
        }
        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }


}