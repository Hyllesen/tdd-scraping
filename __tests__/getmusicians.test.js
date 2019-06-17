const parser = require("../parser");
const fs = require("fs");
let html;

beforeAll(() => {
  html = fs.readFileSync("./musicians.html");
});

it("should get a list of musicians", async () => {
  const listings = await parser.getListings(html);
  expect(listings.length).toBe(120);
});

it("first post should be CCR revival post", async () => {
  const listings = await parser.getListings(html);
  expect(listings[0].title).toBe("BLUES FUNK KEYBOARDS wanted");
});

it("listing datetime", async () => {
  const listings = await parser.getListings(html);
  expect(listings[0].date).toStrictEqual(new Date("2019-06-17T09:43:00.000Z"));
});

it("listing url", async () => {
  const listings = await parser.getListings(html);
  expect(listings[0].url).toBe(
    "https://sfbay.craigslist.org/nby/muc/d/san-rafael-blues-funk-keyboards-wanted/6914126254.html"
  );
});
