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
    public partial class APIDiseñoContext : DbContext
    {
        public APIDiseñoContext(DbContextOptions<APIDiseñoContext> options) : base(options)
        {
        }
        /*Agrega la tabla Direccon con dbset*/
        public virtual DbSet<Lote> Lote { get; set; }
        public virtual DbSet<ObraSocial> ObraSocial { get; set; }
        public virtual DbSet<Odontologo> Odontologo { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=APIDiseño;Persist Security Info=True;Password=M6859aml#;Username=postgres");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            OnModelCreatingPartial(modelBuilder);
        }
        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }


}