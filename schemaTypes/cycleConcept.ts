export default {
  name: 'cycleConcept',  // Schema name
  type: 'document',  // Document type
  title: 'Cycle Concept',  // Title of the document type
  fields: [
    {
      name: 'title',  // Name of the title field
      type: 'string',
      title: 'Title'  // Title in the Sanity editor
    },
    {
      name: 'cycle',  // Name of the cycle field
      type: 'string',
      title: 'Cycle'  // Label for the cycle (e.g., Pulsar, Sintonizar)
    },
    {
      name: 'theory',  // The theory section with rich text and localization
      type: 'object',
      title: 'Theory of the Concept',
      fields: [
        {
          name: 'introduction',  // Localized introduction field
          type: 'object',
          title: 'Localized Introduction',
          fields: [
            {
              name: 'en',
              type: 'array',
              title: 'Introduction (English)',
              of: [{ type: 'block' }]  // Rich text for English
            },
            {
              name: 'es',
              type: 'array',
              title: 'Introduction (Spanish)',
              of: [{ type: 'block' }]  // Rich text for Spanish
            }
          ]
        },
        {
          name: 'markdownContent',  // Localized markdown content
          type: 'object',
          title: 'Localized Markdown Content',
          fields: [
            {
              name: 'en',
              type: 'array',
              title: 'Markdown Content (English)',
              of: [{ type: 'block' }]
            },
            {
              name: 'es',
              type: 'array',
              title: 'Markdown Content (Spanish)',
              of: [{ type: 'block' }]
            }
          ]
        }
      ]
    },
    {
      name: 'activities',  // Array of activities
      type: 'array',
      title: 'Activities',
      of: [
        {
          type: 'object',
          title: 'Activity',
          fields: [
            {
              name: 'title',  // Title of the activity
              type: 'string',
              title: 'Activity Title'
            },
            {
              name: 'markdownContent',  // Localized markdown content for each activity
              type: 'object',
              title: 'Localized Activity Content',
              fields: [
                {
                  name: 'en',
                  type: 'array',
                  title: 'Activity Content (English)',
                  of: [{ type: 'block' }]
                },
                {
                  name: 'es',
                  type: 'array',
                  title: 'Activity Content (Spanish)',
                  of: [{ type: 'block' }]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'media',  // Array of images or media URLs
      type: 'array',
      title: 'Media',
      of: [
        {
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',  // Alt text for the image
              type: 'string',
              title: 'Alt Text'
            },
            {
              name: 'caption',  // Caption for the image
              type: 'string',
              title: 'Caption'
            },
            {
              name: 'credit',  // Credit for the image
              type: 'string',
              title: 'Credit'
            }
          ]
        },
        {
          type: 'object',
          title: 'External Media URL',
          fields: [
            {
              name: 'url',  // URL for external media
              type: 'url',
              title: 'Media URL'
            },
            {
              name: 'alt',  // Alt text for accessibility
              type: 'string',
              title: 'Alt Text'
            },
            {
              name: 'caption',  // Caption for the external media
              type: 'string',
              title: 'Caption'
            }
          ]
        }
      ]
    }
  ]
};
