
const SitemapGenerator = require('sitemap-generator');
  
// create generator
const generator = SitemapGenerator('https://sitebaseurl.ru', {
  stripQuerystring: true,
  filepath: './public/sitemap.xml', 
  lastMod: true
});
 
// register event listeners
generator.on('done', (e) => {
  // sitemaps created
  console.log(e)
  console.log('sitemap is created')
});
 
// start the crawler
generator.start();
 