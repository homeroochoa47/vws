import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'reviewCard',
    title: 'Review Card',
    type: 'object',
    fields: [
        defineField({
            name: 'reviewQuote',
            title: 'Review Quote',
            type: 'string',
            description: 'A quote taken from the review meant to higlight something the client said in their review. Shown at the top of the review card.'
        }),
        defineField({
            name: 'reviewBody',
            type: 'text',
            title: 'Review Body Text',
            description: 'The full review text itself.'
        }),
        defineField({
            name: 'reviewerName',
            type: 'string',
            title: 'Reviewer Name',
        }),
        defineField({
            name: 'reviewerService',
            title: 'Reviewer Service/Product',
            type: 'string',
            description: 'The service or product that the reviewer selected when they had their work done.'
        }),
    ]
})