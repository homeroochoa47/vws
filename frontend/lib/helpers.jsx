import imageUrlBuilder from '@sanity/image-url'
import { client } from "../client"

const builder = imageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source).auto('format')
}

export async function getAllProjectSlugs() {
    const cars = await client.fetch('*[_type == "projectList"]');
    return cars[0].projectList.map((car) => car.slug.current);
}

export async function getAllLocationSlugs() {
    const locations = await client.fetch('*[_type == "serviceLocations"][0].locationList[hasOwnPage == true]');
    return locations.map((location) => location.slug.current);
}

export async function getAllServiceSlugs() {
    const services = await client.fetch('*[_type == "services"]');
    return services[0].services.map((service) => service.slug.current);
}