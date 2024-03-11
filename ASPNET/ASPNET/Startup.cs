using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SQLitePCL;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNET
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public static ApplicationContext applicationContext;

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            Batteries.Init();

            // Вызов SetProvider() для настройки поставщика SQLite
            SQLitePCL.raw.SetProvider(new SQLitePCL.SQLite3Provider_e_sqlite3());
           services.AddDbContext<ApplicationContext>(options => { options.UseSqlite("Data Source=TeamLunarTick.db"); } );
            services.AddControllers();
            services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigins",
                    builder =>
                    {
                        builder.AllowAnyOrigin()
                               .AllowAnyHeader()
                               .AllowAnyMethod();
                    });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors("AllowSpecificOrigins");
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseStatusCodePagesWithReExecute("/error", "?code={0}");

            app.Map("/error", ap => ap.Run(async context =>
            {
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot","index.html");

                if (File.Exists(filePath))
                {
                    // Устанавливаем тип содержимого как text/html
                    context.Response.ContentType = "text/html";

                    // Читаем содержимое файла
                    var fileContent = await File.ReadAllTextAsync(filePath);

                    // Отправляем содержимое файла в ответ
                    await context.Response.WriteAsync(fileContent);
                }
                else
                {
                    // В случае, если файл не найден, возвращаем ошибку 404
                    context.Response.StatusCode = StatusCodes.Status404NotFound;
                    await context.Response.WriteAsync("404 File Not Found");
                }
            }));
            app.UseRouting();


            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
