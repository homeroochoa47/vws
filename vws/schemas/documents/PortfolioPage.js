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
    defineField({
      name: 'portfolioProjects',
      title: 'Portfolio Projects',
      type: 'array',
      of: [{type: "portfolioProject"}],
      description: "Products are separated by product categories. Each category has its own slider listing every product in that category."
    }),
  ]
});