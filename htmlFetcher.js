const request = require("request-promise");

async function getHtmlFromUrl(url) {
  const html = await request.get(url);
  return html;
}
