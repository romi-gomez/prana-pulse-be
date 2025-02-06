// src/schemas/globalContent.js
export default {
    name: 'globalContent',
    type: 'document',
    title: 'Global Content',
    fields: [
      {
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
      },
      {
        name: 'texts',
        type: 'object',
        title: 'Content Texts',
        fields: [
          {
            name: 'navigation',
            type: 'object',
            title: 'Navigation',
            fields: [
              { name: 'home', type: 'string', title: 'Home Link Text' },
              { name: 'about', type: 'string', title: 'About Link Text' },
              { name: 'services', type: 'string', title: 'Services Link Text' },
              { name: 'contact', type: 'string', title: 'Contact Link Text' },
            ],
          },
          {
            name: 'buttons',
            type: 'object',
            title: 'Buttons',
            fields: [
              { name: 'login', type: 'string', title: 'Login Button Text' },
              { name: 'signup', type: 'string', title: 'Signup Button Text' },
            ],
          },
          {
            name: 'messages',
            type: 'object',
            title: 'Messages',
            fields: [
              { name: 'error', type: 'string', title: 'Error Message Text' },
              { name: 'success', type: 'string', title: 'Success Message Text' },
            ],
          },
        ],
      },
    ],
  };