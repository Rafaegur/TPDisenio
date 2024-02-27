using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Data.Models;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Data.Data;
using SQLitePCL;
using System.Linq;

namespace API_Diseño.Controllers
{
    [Route("API/[controller]")]
    [ApiController]
    public class LoteController : ControllerBase
    {
        private readonly APIDiseñoContext context;

        public LoteController(APIDiseñoContext context)
        {
            this.context = context;
        }

        // POST api/<ValuesController>
        [HttpPost("PostLotes", Name = "PostLotes")]
        public ActionResult Post([FromBody] Lote lote)
        {
            try
            {
                var obraSocial = context.ObraSocial.FirstOrDefault(c => c.Id == lote.ObraSocialId);
                var odontologo = context.Odontologo.FirstOrDefault(c => c.Id == lote.OdontologoId);

                if (obraSocial == null || odontologo == null)
                {
                    return BadRequest("La obraSocial o el odontologo no existe.");
                }

                lote.ObraSocial = obraSocial;
                lote.Odontologo = odontologo;
                context.Lote.Add(lote);
                context.SaveChanges();

                return CreatedAtRoute("GetLotes", new { id = lote.Id }, lote);
            }
            catch (Exception ex)
            {
                return BadRequest("Error al guardar el lote. Detalles: " + ex.InnerException?.Message);
            }
        }


        // GET: api/<ValuesController>
        [HttpGet("GetLotes", Name = "GetLotes")]
        public async Task<ActionResult> GetLotes()
        {
            List<Lote> lote = await context.Lote
                .Include(x => x.ObraSocial)
                .Include(x => x.Odontologo)
                .ToListAsync();

            return Ok(lote);
        }

        [HttpPut("PutLote", Name = "PutLote")]
        public ActionResult Put(int id, [FromBody] Lote LoteActualizado)
        {
            try
            {
                if (LoteActualizado == null)
                {
                    return BadRequest("Datos del Lote no validos");
                }
                var LoteModi = context.Lote.Find(id);
                if (LoteModi == null)
                {
                    return NotFound("El lote no fue encontrado");
                }
                LoteModi.Cantidad = LoteActualizado.Cantidad;
                LoteModi.Mes = LoteActualizado.Mes;
                context.SaveChanges();
                return Ok($"Lote con id {id} modificada");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.ToString()}");
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpDelete("DeleteLote", Name = "DeleteLote")]
        public async Task<ActionResult> Delete(int id)
        {
            var lote = await context.Lote.FindAsync(id);

            if (lote == null)
            {
                return NotFound();
            }

            context.Lote.Remove(lote);
            await context.SaveChangesAsync();

            return NoContent();
        }
    }
}