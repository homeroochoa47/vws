import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolioProject',
  type: 'object',
  title: 'Portfolio Project',
  fields: [
    defineField({
        name: 'projectName',
        title: 'Project Name',
        type: 'string',
    }),
    defineField({
      name: 'projectDescription',
      title: 'Project Description',
      type: 'string',
  }),
    defineField({
      name: 'beforeImage',
      title: 'Before Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'afterImage',
      title: 'After Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
  ]
});