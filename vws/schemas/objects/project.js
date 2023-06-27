import {defineField, defineType} from 'sanity'

export default {
    name: 'project',
    title: 'Project',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Project Title',
        type: 'string',
        description: 'Company, Vehicle Name, Vehicle Type',
      },
      // {
      //   name: 'vehicleType',
      //   title: 'Vehicle Type',
      //   type: 'string',
      //   options: {
      //     list: ['Fleet', 'Box Truck', 'Truck', 'Trailer', 'Bus', 'Van', 'Food Truck'],
      //   },
      // },
      {
        name: 'vehicleType',
        title: 'Vehicle Type',
        type: 'array',
        of: [{type: 'string'}],
        options: {
            list: [
            {title: 'Fleet', value: 'fleet'},
            {title: 'Box Truck', value: 'boxTruck'},
            {title: 'Truck', value: 'truck'},
            {title: 'Trailer', value: 'trailer'},
            {title: 'Bus', value: 'bus'},
            {title: 'Van', value: 'van'},
            {title: 'Food Truck', value: 'foodTruck'},
            ]
        }
      },
      {
        name: 'companyName',
        title: 'Company Name',
        type: 'string',
        description: 'The name of the company that the project was done for',
      },
      {
        name: 'vehicleName',
        title: 'Vehicle Name',
        type: 'string',
        description: 'The name of the vehicle(s). E.g. Ford Transit, Metro Rail, etc.',
      },
      {
        title: 'URL Slug',
        name: 'slug',
        type: 'slug',
        description: '[company]-[vehicle-name]-[vehicle-type]-wrap',
        options: {
          source: 'title',
          maxLength: 128
        },
      },
      {
        name: 'leadingImage',
        title: 'Leading Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
          },
        ],
      },
      {
        name: 'supportingImages',
        title: 'Supporting Images',
        type: 'array',
        of: [
          {
            title: 'Supporting Image',
            type: 'object',
            name: 'supportingImage',
            fields: [
              {
                name: 'vehicleImage',
                title: 'Vehicle Image',
                type: 'image',
                options: {
                  hotspot: true,
                },
                fields: [
                  {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    description: 'Tesla [model] wrapped in [color] [style] [brand] wrap'
                  },
                  {
                    name: 'caption',
                    title: 'Image Caption',
                    type: 'string',
                    description: 'Tesla [model] [style] [color] wrap'
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  