import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolioPage',
  type: 'document',
  title: 'Portfolio Page',
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