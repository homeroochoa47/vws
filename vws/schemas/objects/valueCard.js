import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'valueCard',
    title: 'Value Card',
    type: 'object',
    fields: [
        defineField({
            name: 'valueHeader',
            title: 'Value Name/Header',
            type: 'string',
            description: 'The Value to be displayed in this card.'
        }),
        defineField({
            name: 'valueDescription',
            title: 'Value Description',
            type: 'string',
            description: 'Briefly describe this value and how it relates to the company.'
        }),
    ]
})