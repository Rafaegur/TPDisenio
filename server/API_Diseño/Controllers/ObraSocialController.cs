using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Data.Models;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Data.Data;
using SQLitePCL;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API_Diseño.Controllers
{
    [Route("API/[controller]")]
    [ApiController]
    public class ObraSocialController : ControllerBase
    {
        private readonly APIDiseñoContext context;

        public ObraSocialController(APIDiseñoContext context)
        {
            this.context = context;
        }
        // POST api/<ValuesController>
        [HttpPost("PostObraSociales", Name = "PostObraSociales")]
        public ActionResult Post([FromBody] ObraSocial obraSocial)
        {
            try
            {
                if (obraSocial.Nombre == null)
                {
                    return BadRequest("La obraSocial tiene campos sin completar.");
                }

                context.ObraSocial.Add(obraSocial);
                context.SaveChanges();

                return CreatedAtRoute("GetObraSociales", new { id = obraSocial.Id }, obraSocial);
            }
            catch (Exception ex)
            {
                return BadRequest("Error al guardar la obraSocial. Detalles: " + ex.InnerException?.Message);
            }
        }
        // GET: api/<ValuesController>
        [HttpGet("GetObraSociales", Name = "GetObraSociales")]
        public async Task<ActionResult> GetObraSociales()
        {
            List<ObraSocial> obraSocial = await context.ObraSocial.ToListAsync();
            return Ok(obraSocial);
        }

        [HttpGet("GetOdontologoes", Name = "GetOdontologoes")]
        public async Task<ActionResult> GetOdontologoes()
        {
            List<Odontologo> odontologo = await context.Odontologo.ToListAsync();
            return Ok(odontologo);
        }

        [HttpPut("PutObraSocial", Name = "PutObraSocial")]
        public ActionResult Put(int id, [FromBody] ObraSocial ObraSocialActualizada)
        {
            try
            {
                if (ObraSocialActualizada == null)
                {
                    return BadRequest("Datos del ObraSocial no validos");
                }
                var ObraSocialModi = context.ObraSocial.Find(id);
                if (ObraSocialModi == null)
                {
                    return NotFound("El lote no fue encontrado");
                }
                ObraSocialModi.Nombre = ObraSocialActualizada.Nombre;
                context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.ToString()}");
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpDelete("DeleteObraSocial", Name = "DeleteObraSocial")]
        public async Task<ActionResult> Delete(int id)
        {
            var obraSocial = await context.ObraSocial.FindAsync(id);

            if (obraSocial == null)
            {
                return NotFound();
            }

            context.ObraSocial.Remove(obraSocial);
            await context.SaveChangesAsync();

            return NoContent();
        }
    }
}