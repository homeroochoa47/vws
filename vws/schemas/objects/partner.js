import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'partner',
    title: 'Partner',
    type: 'object',
    fields: [
      defineField({
          name: 'partnerName',
          title: 'Partner Name',
          type: 'string',
      }),
      defineField({
          name: 'partnerLogo',
          title: 'Partner Logo',
          type: 'image',
          accept: 'image/jpg+png',
          options: {
            hotspot: true,
          },
        }),
    ]
})