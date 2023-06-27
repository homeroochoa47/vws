import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'servicePage',
  type: 'document',
  title: 'Service Page',
  fields: [
    defineField({
        name: 'heroSection',
        title: 'Hero Section',
        type: 'object',
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
            name: 'heroCaption',
            type: 'text',
            title: 'Hero Caption',
            description: 'The Hero Caption, displayed in yellow text.'
          }),
        ]
    })
  ]
});