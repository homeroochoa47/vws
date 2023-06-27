import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactPage',
  type: 'document',
  title: 'Contact Page',
  fields: [
    defineField({
      name: "heroImage",
      title: "Page Opening Image",
      type: "image",
      description: "The opening image at the top of the page.",
      options: {
        hotspot: true,
      }
    }),
  ]
});