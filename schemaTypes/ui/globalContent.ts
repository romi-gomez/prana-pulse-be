// src/schemas/globalContent.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'globalContent',
  type: 'document',
  title: 'Global Content',
  description: 'Global content and translations used throughout the website',
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
      description: 'Collection of text content organized by sections',
      fields: [
        defineField({
          name: 'navigation',
          type: 'object',
          title: 'Navigation',
          description: 'Text content for navigation menu items',
          fields: [
            defineField({ name: 'home', type: 'string', title: 'Home Link Text', description: 'Text for the Home navigation link' }),
            defineField({ name: 'about', type: 'string', title: 'About Link Text', description: 'Text for the About navigation link' }),
            defineField({ name: 'services', type: 'string', title: 'Services Link Text', description: 'Text for the Services navigation link' }),
            defineField({ name: 'contact', type: 'string', title: 'Contact Link Text', description: 'Text for the Contact navigation link' }),
          ],
        }),
        defineField({
          name: 'buttons',
          type: 'object',
          title: 'Buttons',
          description: 'Text content for various buttons throughout the site',
          fields: [
            defineField({ name: 'login', type: 'string', title: 'Login Button Text', description: 'Text for the login button' }),
            defineField({ name: 'signup', type: 'string', title: 'Signup Button Text', description: 'Text for the signup button' }),
          ],
        }),
        defineField({
          name: 'messages',
          type: 'object',
          title: 'Messages',
          description: 'Text content for system messages and notifications',
          fields: [
            defineField({ name: 'error', type: 'string', title: 'Error Message Text', description: 'Text for error messages' }),
            defineField({ name: 'success', type: 'string', title: 'Success Message Text', description: 'Text for success messages' }),
          ],
        }),
      ],
    }),
  ],
})