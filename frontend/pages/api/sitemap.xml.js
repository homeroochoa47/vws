import { getAllProjectSlugs, getAllLocationSlugs, getAllServiceSlugs } from "../../lib/helpers";
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  try {
    const projectSlugs = await getAllProjectSlugs();
    const locationSlugs = await getAllLocationSlugs();
    const serviceSlugs = await getAllServiceSlugs();
    
    const links = projectSlugs.map((slug) => ({
      url: `/vehicle-wrap-portfolio/${slug}`,
      changefreq: "weekly",
      priority: 0.8,
    }));

    locationSlugs.map((slug) => {
      links.push({
        url: `/vehicle-wrap-service-locations/${slug}`,
        changefreq: "weekly",
        priority: 0.8,
      });
    });

    serviceSlugs.map((slug) => {
      links.push({
        url: `/tesla-wrap-vehicle-wrap-services/${slug}`,
        changefreq: "monthly",
        priority: 0.6,
      });
    });    

    // Add other pages
    const pages = ["/", "/vehicle-wrap-portfolio", "/vehicle-wrap-service-locations", "/contact"];
    pages.forEach((url) => {
      links.push({
        url,
        changefreq: "monthly",
        priority: 0.6,
      });
    });

    const stream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString);
  } catch (error) {
    console.error(error);
    res.send(JSON.stringify(error));
  }
};