import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'gallery',
    title: 'Gallery Section',
    type: 'document',
    fields: [
        defineField({
            name: 'gridName',
            type: 'string',
            title: 'Grid Name',
            description: "Give this grid a name so you can reference it later."
        }),
        defineField({
            name: 'preCaption',
            type: 'string',
            title: 'Initial Caption'
        }),
        defineField({
            name: 'mainCaption',
            type: 'string',
            title: 'Main Caption'
        }),
        defineField({
            name: 'imageGrid',
            type: 'array',
            title: 'Gallery Image Grid',
            description: 'The Grid of images showcasing past projects and jobs. Total must be divisible by four. *Note that the mobile site will only display the first four images. Ensure that the highest priority images are at the top for mobile-view.',
            of: [{type: 'image'}],
            validation: Rule => Rule.length(8).warning('Please Make sure total amount of images is a multiple of 4. (Ex. 4, 8, 12, etc.) ')
        }),
    ]
})