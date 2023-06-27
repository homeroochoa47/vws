import {defineField, defineType} from 'sanity'

export default {
    name: 'vehicleList',
    title: 'Vehicle List',
    type: 'document',
    fields: [
      {
        name: 'vehicleList',
        title: 'Vehicle List',
        type: 'array',
        of: [{ type: 'vehicle' }], // Reference to the car object schema
      },
    ],
  };