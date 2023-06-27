import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'service',
    title: 'Service',
    type: 'object',
    fields: [
        defineField({
            name: 'serviceName',
            title: 'Service Name',
            type: 'string',
            description: 'The name of the service. Example: "Fleet Wraps"'
        }),
        defineField({
          name: 'linkKeyword',
          title: 'Category Link Keyword',
          type: 'string',
          description: 'The keyword that will be used to link the service to related cars. E.g. "fleet", "box-truck", "truck".'
        }),
        defineField({
            title: 'URL Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'serviceName',
              maxLength: 96
            },
          }),
        defineField({
          name: 'pageHeroImage',
          title: 'Hero Photo',
          type: 'image',
          description: 'The leading image for the page that will be used as the main backdrop at the top behind the page Header. Make sure to use a high-quality image that fits the theme of the site (darker colors).',
          accept: 'image/jpg+png',
          options: {
            hotspot: true,
          },
        }),
        defineField({
            name: 'heroCaption',
            title: 'Hero Caption',
            type: 'text',
            description: 'The Caption that will go on the hero section'
          }),
        defineField({
          name: 'header',
          title: 'Header',
          type: 'string',
          description: 'Header Text beneath the hero'
        }),
        defineField({
          name: 'headerCaption',
          title: 'Header Caption',
          type: 'text',
          description: 'Header Caption accompanying the header text.'
        }),
        defineField({
            name: 'referencePhoto',
            title: 'Reference Photo',
            type: 'image',
            description: 'The reference photo is the photo that will be used when this service is referenced in other parts of the website. For example, in the services scroller on the home page.',
            accept: 'image/jpg+png',
            options: {
              hotspot: true,
            },
          }),
          defineField({
            name: 'referenceCaption',
            title: 'Reference Caption',
            type: 'string',
            description: 'Similar to the reference photo, this caption will be part of the services scroller on other pages in the website. It should be a short description about this service.'
          }),
    ]
})