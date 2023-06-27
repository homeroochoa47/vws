import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'services',
  type: 'document',
  title: 'Service Pages',
  fields: [
    defineField({
        name: 'services',
        title: 'Service Pages',
        type: 'array',
        description: "Create a service item for each service page that you would like to include on the site.",
        of: [{type: "service"}]
    }),
  ]
});