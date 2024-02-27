using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class Lote
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int Mes { get; set; }
        public int Cantidad { get; set; }

        [ForeignKey("Odontologo")]
        public int OdontologoId { get; set; }
        public Odontologo Odontologo { get; set; }
        [ForeignKey("ObraSocial")]
        public int ObraSocialId { get; set; }
        public ObraSocial ObraSocial { get; set; }
    }
}
