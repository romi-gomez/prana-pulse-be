import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'navigationLinks',
    title: 'Navigation Links',
    type: 'document',
    fields: [
      defineField({
        name: 'page',
        title: 'Page Name',
        type: 'string', 
      }),
      defineField({
        name: 'links',
        title: 'Navigation Links',
        type: 'array',
        of: [
          defineField({
            name: 'link',
            type: 'object', 
            fields: [
              defineField({ name: 'en', title: 'English Text', type: 'string' }),
              defineField({ name: 'es', title: 'Spanish Text', type: 'string' }),
              defineField({ name: 'url', title: 'URL', type: 'string' }),
            ]
          })
        ],
      }),
    ],
  })