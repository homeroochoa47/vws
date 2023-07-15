import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'faqSection',
    title: 'FAQ Section',
    type: 'document',
    fields: [
      defineField({
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
        defineField({
            name: 'faqSectionImage',
            title: 'FAQ Section Image',
            type: 'image',
            fields: [
              {
                name: 'alt',
                title: 'Alt Text',
                type: 'string',
              },
            ],
            options: {
              hotspot: true,
            },
        }),
    ]
})