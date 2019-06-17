const request = require("request-promise");
const fs = require("fs");

const html = fs.readFileSync("./__tests__/musicians.html");

async function getHtmlFromUrl(url) {
  const html = await request.get(url);
  return html;
}

function writeHtmlToPath(path, html) {
  fs.writeFileSync(path, html);
}

console.log(html.toString());

//getHtmlFromUrl("https://sfbay.craigslist.org/search/muc");
