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
    public class OdontologoController : ControllerBase
    {
        private readonly APIDiseñoContext context;

        public OdontologoController(APIDiseñoContext context)
        {
            this.context = context;
        }
        // POST api/<ValuesController>
        [HttpPost("PostOdontologos", Name = "PostOdontologos")]
        public ActionResult Post([FromBody] Odontologo odontologo)
        {
            try
            {
                if (odontologo.Matricula == null || odontologo.Nombre == null || odontologo.Apellido == null || odontologo.Dni == null)
                {
                    return BadRequest("La odontologo tiene campos sin completar.");
                }

                context.Odontologo.Add(odontologo);
                context.SaveChanges();

                return CreatedAtRoute("GetOdontologos", new { id = odontologo.Id }, odontologo);
            }
            catch (Exception ex)
            {
                return BadRequest("Error al guardar la odontologo. Detalles: " + ex.InnerException?.Message);
            }
        }
        // GET: api/<ValuesController>
        [HttpGet("GetOdontologos", Name = "GetOdontologo")]
        public async Task<ActionResult> GetOdontologos()
        {
            List<Odontologo> odontologo = await context.Odontologo.ToListAsync();
            return Ok(odontologo);
        }

        [HttpPut("PutOdontologo", Name = "PutOdontologo")]
        public ActionResult Put(int id, [FromBody] Odontologo OdontologoActualizada)
        {
            try
            {
                if (OdontologoActualizada == null)
                {
                    return BadRequest("Datos del Odontologo no validos");
                }
                var OdontologoModi = context.Odontologo.Find(id);
                if (OdontologoModi == null)
                {
                    return NotFound("El inmueble no fue encontrado");
                }
                OdontologoModi.Matricula = OdontologoActualizada.Matricula;
                OdontologoModi.Nombre = OdontologoActualizada.Nombre;
                OdontologoModi.Apellido = OdontologoActualizada.Apellido;
                OdontologoModi.Dni = OdontologoActualizada.Dni;

                context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.ToString()}");
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpDelete("DeleteOdontologo", Name = "DeleteOdontologo")]
        public async Task<ActionResult> Delete(int id)
        {
            var odontologo = await context.Odontologo.FindAsync(id);

            if (odontologo == null)
            {
                return NotFound();
            }

            context.Odontologo.Remove(odontologo);
            await context.SaveChangesAsync();

            return NoContent();
        }
    }
}