import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'mainService',
    title: 'Service',
    type: 'object',
    fields: [
        defineField({
            name: 'serviceName',
            title: 'Service Name',
            type: 'string',
            description: 'The name of the service. Example: "Electrical Services"'
        }),
        defineField({
            name: 'serviceDescription',
            title: 'Service Description',
            type: 'string',
            description: 'A paragraph describing the service, what you offer, more specific information about the service, etc. Let the user know what this service is all about. Appears at the beginning of each page.'
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