import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'reviewSection',
    title: 'Review Section',
    type: 'document',
    fields: [
        defineField({
            name: 'reviewSectionName',
            type: 'string',
            title: 'Review Section Name',
            description: "Give this Review Section a name so you can reference it later."
        }),
        defineField({
            name: 'reviewSection',
            title: 'Review Section',
            type: 'array',
            of: [{type: 'reviewCard'}],
            validation: Rule => Rule.length(3)
          }),
    ]
})