import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
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
            name: 'backgroundImage',
            title: 'Background Image',
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
              name: 'topHeader',
              type: 'string',
              title: 'Top Header Caption',
              description: 'The first caption in the smaller font, white text.'
          }),
          defineField({
            name: 'mainCaption',
            type: 'string',
            title: 'Main Caption',
            description: 'The Main Caption, displayed in white text.'
          }),
          defineField({
            name: 'vehicleTypes',
            type: 'array',
            title: 'Vehicle Types',
            of: [{type: 'string'}],
            description: 'A list of vehicle types that are cycled through on the home page. Green text.'
          }),
          defineField({
            name: 'followingCaption',
            type: 'string',
            title: 'Following Caption',
            description: 'The third caption, calling the user to the buttons.'
          }),
          defineField({
            name: 'companyLogos',
            title: 'Company Logos',
            type: 'array',
            of: [{type: 'image'}],
            description: 'The logos for the company that VWS has done work for.'
        }),
        ]
    }),
    defineField({
      name: 'aboutUsSection',
      title: 'About Us Section',
      type: 'object',
      fields: [
        defineField({
          name: 'aboutSectionHeader',
          type: 'string',
          title: 'About Section Header',
          description: 'Header that goes at the top of the about section.'
        }),
        defineField({
          name: 'aboutSectionImage',
          title: 'About Section Image',
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
            name: 'stats',
            title: 'Statistics',
            type: 'array',
            of: [{
              type: 'aboutStat', 
              options: {
                hotspot: true,
              },
            }],
            description: 'The statistics that appear in the about section'
        }),
      ]
    }),
  ]
});