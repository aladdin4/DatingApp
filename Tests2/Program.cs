using Microsoft.Playwright;
using System.ComponentModel.Design;

namespace Tests2
{
    internal class Program
    {
        static async Task Main(string[] args)
        {
            using var playWright = await Playwright.CreateAsync();
            var chrome = await playWright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions{ Headless= false});
            var ff = await playWright.Firefox.LaunchAsync(new BrowserTypeLaunchOptions{ Headless= false});

             LaunchBrowser(chrome, "https://www.google.com/", "https://www.youtube.com/");
             LaunchBrowser(ff, "https://www.youtube.com/", "https://www.google.com/");
             LaunchBrowser(chrome, "https://www.youtube.com/", "https://www.google.com/");
             LaunchBrowser(ff, "https://www.youtube.com/", "https://www.google.com/");
            
           
            await Task.Delay(-1);
        }

        static async Task LaunchBrowser(IBrowser browser, string url1, string url2)
        {
            var page = await browser.NewPageAsync();
            await page.GotoAsync(url1);
            await page.GotoAsync(url2);
            await page.GoBackAsync();
            await page.GoForwardAsync();  
            var title = await page.TitleAsync();
            Console.WriteLine(value: title);
        }
    }
}
