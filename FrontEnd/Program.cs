using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using todo;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");
var baseUrl = "http://localhost:5033";

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(baseUrl) });

await builder.Build().RunAsync();
