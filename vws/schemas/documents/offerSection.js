import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'offerSection',
  type: 'document',
  title: 'Offer Section',
  fields: [
    defineField({
      name: 'offerHeroImage',
      title: 'Offer Hero Image',
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
    defineField({
      name: 'offerHeroCaption',
      type: 'string',
      title: 'Offer Hero Caption',
      description: 'The Hero Caption, displayed in yellow text.'
    }),
  ]
});