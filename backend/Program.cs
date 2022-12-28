using Microsoft.EntityFrameworkCore;
using QRCoder;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<BancoDeDados>(
    options => options.UseSqlite("Data Source=BancoDeDados.db")
);
var app = builder.Build();
// var baseurl = "http:///localhost:5033";

// builder.Services.AddScoped( sp => new HttpClient {
//     BaseAddress = new Uri(baseurl)
// });

app.MapGet("/allcolaborador", (BancoDeDados bd) => bd.Colaboradores.ToListAsync());
app.MapGet("/getcolaborador/{id}", (BancoDeDados bd, int id) =>  bd.Colaboradores.Single(c => c.Id == id));

app.MapPost("/create", async (Colaborador colaborador, BancoDeDados bd) => {
    bd.Add(colaborador);
    await bd.SaveChangesAsync();
    return Results.Ok(colaborador); 
});




app.Run();
