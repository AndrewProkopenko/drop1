
const SitemapGenerator = require('sitemap-generator');
 
// create generator
const generator = SitemapGenerator('https://suraservice.ru', {
  stripQuerystring: true,
  filepath: './public/sitemap.xml', 
  lastMod: true
});
 
// register event listeners
generator.on('done', () => {
  // sitemaps created
  console.log('sitemap is created')
});
 
// start the crawler
generator.start();
 