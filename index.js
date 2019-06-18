const request = require("request-promise");
const parser = require("./parser");

async function getHtmlFromUrl(url) {
  const html = await request.get(url);
  return html;
}

async function main(url) {
  const html = await getHtmlFromUrl(url);
  const listings = await parser.getListings(html);
  console.log(listings);
}

main("https://sfbay.craigslist.org/d/musicians/search/muc");
