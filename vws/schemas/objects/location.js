import { defineField, defineType } from 'sanity';

export default {
  name: 'location',
  title: 'Location',
  type: 'object',
  fields: [
    {
      name: 'locationName',
      title: 'Location Name',
      type: 'string',
      description: 'City/Neighborhood Name',
    },
    {
      name: 'hasOwnPage',
      title: 'Has Own Page',
      type: 'boolean',
      description: 'Enable if this location should have its own dynamic page',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Only required if above is true',
      options: {
        source: 'locationName',
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'locationImage',
      title: 'Location Image',
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
      name: 'locationCaption',
      title: 'Location Caption',
      type: 'text',
      description: 'City/Neighborhood Name',
    },
  ],
};
