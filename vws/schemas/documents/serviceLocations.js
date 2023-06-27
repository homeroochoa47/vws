import {defineField, defineType} from 'sanity'

export default {
    name: 'serviceLocations',
    title: 'Service Locations',
    type: 'document',
    fields: [
      {
        name: 'locationList',
        title: 'Location List',
        type: 'array',
        of: [{ type: 'location' }], // Reference to the car object schema
      },
    ],
  };