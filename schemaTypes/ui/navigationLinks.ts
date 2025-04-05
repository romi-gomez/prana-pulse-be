import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'navigationLinks',
    title: 'Navigation Links',
    type: 'document',
    description: 'Configure navigation links for different pages of the website',
    fields: [
      defineField({
        name: 'page',
        title: 'Page Name',
        type: 'string', 
        description: 'Name of the page where these navigation links will appear',
      }),
      defineField({
        name: 'links',
        title: 'Navigation Links',
        type: 'array',
        description: 'List of navigation links to be displayed on this page',
        of: [
          defineField({
            name: 'link',
            type: 'object', 
            description: 'A single navigation link with translations',
            fields: [
              defineField({ name: 'en', title: 'English Text', type: 'string', description: 'Link text in English' }),
              defineField({ name: 'es', title: 'Spanish Text', type: 'string', description: 'Link text in Spanish' }),
              defineField({ name: 'url', title: 'URL', type: 'string', description: 'The URL this link points to (can be internal or external)' }),
            ]
          })
        ],
      }),
    ],
  })