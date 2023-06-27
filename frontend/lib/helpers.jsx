import imageUrlBuilder from '@sanity/image-url'
import { client } from "../client"

const builder = imageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source).auto('format')
}
export const isBrowser = typeof window !== 'undefined'