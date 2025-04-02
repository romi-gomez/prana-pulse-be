// src/schemas/globalContent.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'globalContent',
  type: 'document',
  title: 'Global Content',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      title: 'Language',
      description: 'Language for these translations (e.g., "en", "es")',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Spanish', value: 'es' },
          // Add other languages here
        ],
      },
    }),
    defineField({
      name: 'texts',
      type: 'object',
      title: 'Content Texts',
      fields: [
        defineField({
          name: 'navigation',
          type: 'object',
          title: 'Navigation',
          fields: [
            defineField({ name: 'home', type: 'string', title: 'Home Link Text' }),
            defineField({ name: 'about', type: 'string', title: 'About Link Text' }),
            defineField({ name: 'services', type: 'string', title: 'Services Link Text' }),
            defineField({ name: 'contact', type: 'string', title: 'Contact Link Text' }),
          ],
        }),
        defineField({
          name: 'buttons',
          type: 'object',
          title: 'Buttons',
          fields: [
            defineField({ name: 'login', type: 'string', title: 'Login Button Text' }),
            defineField({ name: 'signup', type: 'string', title: 'Signup Button Text' }),
          ],
        }),
        defineField({
          name: 'messages',
          type: 'object',
          title: 'Messages',
          fields: [
            defineField({ name: 'error', type: 'string', title: 'Error Message Text' }),
            defineField({ name: 'success', type: 'string', title: 'Success Message Text' }),
          ],
        }),
      ],
    }),
  ],
})