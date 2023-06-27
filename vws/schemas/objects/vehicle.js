import {defineField, defineType} from 'sanity'

export default {
    name: 'vehicle',
    title: 'Vehicle',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Object Title',
        type: 'string',
        description: 'Brand, wrap type, color, model',
      },
      {
        name: 'vehicleType',
        title: 'Vehicle Type',
        type: 'string',
        options: {
          list: ['Fleet', 'Box Truck', 'Truck', 'Trailer', 'Bus', 'Van', 'Food Truck'],
        },
      },
      {
        name: 'color',
        title: 'Color',
        type: 'string',
      },
      {
        name: 'wrapType',
        title: 'Wrap Type',
        type: 'string',
        options: {
          list: ['Matte', 'Satin', 'Gloss', 'PPF'],
        },
      },
      {
        name: 'brand',
        title: 'Brand',
        type: 'string',
        options: {
          list: ['3M', 'Avery'],
        },
      },
      {
        title: 'URL Slug',
        name: 'slug',
        type: 'slug',
        description: '[type]-[color]-wrap-tesla-[model]',
        options: {
          source: 'title',
          maxLength: 96
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
  