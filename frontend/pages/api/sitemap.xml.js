// import { getAllCarSlugs, getAllLocationSlugs, getAllServiceSlugs } from "../../lib/helpers";
// const { SitemapStream, streamToPromise } = require("sitemap");
// const { Readable } = require("stream");

// export default async (req, res) => {
//   try {
//     const carSlugs = await getAllCarSlugs();
//     const locationSlugs = await getAllLocationSlugs();
//     const serviceSlugs = await getAllServiceSlugs();
    
//     const links = carSlugs.map((slug) => ({
//       url: `/tesla-wrap-gallery/${slug}`, // Modify the route structure as per your project
//       changefreq: "monthly",
//       priority: 0.6,
//     }));

//     locationSlugs.map((slug) => {
//       links.push({
//         url: `/tesla-wrap-service-locations/${slug}`,
//         changefreq: "monthly",
//         priority: 0.6,
//       });
//     });

//     serviceSlugs.map((slug) => {
//       links.push({
//         url: `/tesla-wrap-services/${slug}`,
//         changefreq: "monthly",
//         priority: 0.6,
//       });
//     });    

//     // Add other pages
//     const pages = ["/home", "/tesla-wrap-services", "/tesla-wrap-service-locations", "/tesla-wrap-gallery", "/contact"];
//     pages.forEach((url) => {
//       links.push({
//         url,
//         changefreq: "monthly",
//         priority: 0.6,
//       });
//     });

//     const stream = new SitemapStream({
//       hostname: `https://${req.headers.host}`,
//     });

//     res.writeHead(200, {
//       "Content-Type": "application/xml",
//     });

//     const xmlString = await streamToPromise(
//       Readable.from(links).pipe(stream)
//     ).then((data) => data.toString());

//     res.end(xmlString);
//   } catch (error) {
//     console.error(error);
//     res.send(JSON.stringify(error));
//   }
// };