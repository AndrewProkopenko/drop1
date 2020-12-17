
const SitemapGenerator = require('sitemap-generator');
  
// create generator
const generator = SitemapGenerator('https://it911.kiev.ua/', {
  stripQuerystring: true,
  filepath: './public/sitemap.xml', 
  lastMod: true
});
 
// register event listeners
generator.on('done', (e) => {
  // sitemaps created 
  console.log('sitemap is created')
});
 
// start the crawler
generator.start();
 