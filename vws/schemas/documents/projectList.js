import {defineField, defineType} from 'sanity'

export default {
    name: 'projectList',
    title: 'Project List',
    type: 'document',
    fields: [
      {
        name: 'projectList',
        title: 'Project List',
        type: 'array',
        of: [{ type: 'project' }], // Reference to the car object schema
      },
    ],
  };