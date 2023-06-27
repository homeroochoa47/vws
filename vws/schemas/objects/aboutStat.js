import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'aboutStat',
    title: 'About Stat',
    type: 'object',
    fields: [
        defineField({
            name: 'statisticValue',
            title: 'Statistic Value',
            type: 'string',
            description: 'Some kind of value (e.g. 15+)'
        }),
        defineField({
            name: 'valueDescription',
            title: 'Value Description',
            type: 'string',
            description: 'A caption to follow the value (e.g. Years in service)'
        }),
    ]
})