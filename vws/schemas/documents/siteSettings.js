import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fields: [
    defineField({
        name: 'logo',
        type: 'image',
        title: 'Logo',
        description: 'The logo that appears throughout the website.',
        options: {
            hotspot: true,
        },
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      description: 'The email that appears throughout the website.'
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
      description: 'The best phone number to reach out to your business'
    }),
    defineField({
      name: 'address',
      title: 'Business Address',
      type: 'string',
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      description: "Format: M-F 9AM - 6PM || Closed Weekends",
      type: 'string',
    }),
    defineField({
      name: 'copyrightInfo',
      title: 'Copyright Info',
      description: "Format: Copyright 2023 Innovative Street Lights.",
      type: 'string',
    }),
  ]
});