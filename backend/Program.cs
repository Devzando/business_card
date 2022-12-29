using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<BancoDeDados>(
    options => options.UseSqlite("Data Source=BancoDeDados.db")
);

builder.Services.AddCors(options => options.AddPolicy("corspolicy", build => {
    build.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader();
}));

var app = builder.Build();

app.MapGet("/allcolaborador", (BancoDeDados bd) => bd.Colaboradores.ToListAsync());
app.MapGet("/getcolaborador/{id}", (BancoDeDados bd, int id) =>  bd.Colaboradores.Single(c => c.Id == id));

app.MapPost("/create", async (Colaborador colaborador, BancoDeDados bd) => {
    bd.Add(colaborador);
    await bd.SaveChangesAsync();
    return Results.Ok(colaborador); 
});

app.MapDelete("/delete/{id}", async (int id, BancoDeDados bd) => {
    Colaborador c = await bd.Colaboradores.FirstOrDefaultAsync(c => c.Id == id);
    bd.Remove(c);
    await bd.SaveChangesAsync();
    return Results.Ok(c); 
});

app.UseCors("corspolicy");
app.Run();
