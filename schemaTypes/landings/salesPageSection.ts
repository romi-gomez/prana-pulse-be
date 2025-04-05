import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'salesPageSection',
  type: 'document',
  title: 'Sales Page Sections',
  description: 'Configure sections that appear on sales pages of the website',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'Section ID',
      description: 'Unique identifier for this section (used for linking and styling)',
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Section Name',
      description: 'Descriptive name for this section (for admin use only)',
    }),
    defineField({
      name: 'group',
      type: 'string',
      title: 'Section Group',
      description: 'Group similar sections for styling (e.g., hero, content, testimonials)',
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Order Number',
      description: 'Number to determine the order of sections on the page',
      validation: Rule => Rule.integer().min(0).warning('Order should be a positive integer'),
    }),
    defineField({
      name: 'headline',
      type: 'object',
      title: 'Localized Headline',
      description: 'Main headline for this sales section with translations',
      fields: [
        defineField({
          name: 'es',
          type: 'array',
          title: 'Headline (Spanish)',
          description: 'Spanish version of the headline',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Heading 1', value: 'h1' },
                { title: 'Heading 2', value: 'h2' },
              ],
              marks: {
                decorators: [
                  { title: 'Bold', value: 'strong' },
                  { title: 'Italic', value: 'em' },
                ],
                annotations: [
                  {
                    name: 'styledSpan',
                    type: 'object',
                    title: 'Styled Span',
                    fields: [
                      {
                        name: 'className',
                        type: 'string',
                        title: 'CSS Class for Span',
                      },
                      {
                        name: 'id',
                        type: 'string',
                        title: 'Element ID (optional)',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        }),
        defineField({
          name: 'en',
          type: 'array',
          title: 'Headline (English)',
          description: 'English version of the headline',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Heading 1', value: 'h1' },
                { title: 'Heading 2', value: 'h2' },
              ],
              marks: {
                decorators: [
                  { title: 'Bold', value: 'strong' },
                  { title: 'Italic', value: 'em' },
                ],
                annotations: [
                  {
                    name: 'styledSpan',
                    type: 'object',
                    title: 'Styled Span',
                    fields: [
                      {
                        name: 'className',
                        type: 'string',
                        title: 'CSS Class for Span',
                      },
                      {
                        name: 'id',
                        type: 'string',
                        title: 'Element ID (optional)',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'subheadline',
      type: 'object',
      title: 'Localized Subheadline',
      description: 'Secondary headline or supporting text with translations',
      fields: [
        defineField({
          name: 'es',
          type: 'array',
          title: 'Subheadline (Spanish)',
          description: 'Spanish version of the subheadline',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Heading 1', value: 'h1' },
                { title: 'Heading 2', value: 'h2' },
              ],
              marks: {
                decorators: [
                  { title: 'Bold', value: 'strong' },
                  { title: 'Italic', value: 'em' },
                ],
                annotations: [
                  {
                    name: 'styledSpan',
                    type: 'object',
                    title: 'Styled Span',
                    fields: [
                      {
                        name: 'className',
                        type: 'string',
                        title: 'CSS Class for Span',
                      },
                      {
                        name: 'id',
                        type: 'string',
                        title: 'Element ID (optional)',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        }),
        defineField({
          name: 'en',
          type: 'array',
          title: 'Subheadline (English)',
          description: 'English version of the subheadline',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Heading 1', value: 'h1' },
                { title: 'Heading 2', value: 'h2' },
              ],
              marks: {
                decorators: [
                  { title: 'Bold', value: 'strong' },
                  { title: 'Italic', value: 'em' },
                ],
                annotations: [
                  {
                    name: 'styledSpan',
                    type: 'object',
                    title: 'Styled Span',
                    fields: [
                      {
                        name: 'className',
                        type: 'string',
                        title: 'CSS Class for Span',
                      },
                      {
                        name: 'id',
                        type: 'string',
                        title: 'Element ID (optional)',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'description',
      type: 'object',
      title: 'Localized Description',
      description: 'Detailed description or supporting text with translations',
      fields: [
        defineField({
          name: 'es',
          type: 'array',
          title: 'Description (Spanish)',
          description: 'Spanish version of the description',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Heading 1', value: 'h1' },
                { title: 'Heading 2', value: 'h2' },
              ],
              marks: {
                decorators: [
                  { title: 'Bold', value: 'strong' },
                  { title: 'Italic', value: 'em' },
                ],
                annotations: [
                  {
                    name: 'styledSpan',
                    type: 'object',
                    title: 'Styled Span',
                    fields: [
                      {
                        name: 'className',
                        type: 'string',
                        title: 'CSS Class for Span',
                      },
                      {
                        name: 'id',
                        type: 'string',
                        title: 'Element ID (optional)',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        }),
        defineField({
          name: 'en',
          type: 'array',
          title: 'Description (English)',
          description: 'English version of the description',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Heading 1', value: 'h1' },
                { title: 'Heading 2', value: 'h2' },
              ],
              marks: {
                decorators: [
                  { title: 'Bold', value: 'strong' },
                  { title: 'Italic', value: 'em' },
                ],
                annotations: [
                  {
                    name: 'styledSpan',
                    type: 'object',
                    title: 'Styled Span',
                    fields: [
                      {
                        name: 'className',
                        type: 'string',
                        title: 'CSS Class for Span',
                      },
                      {
                        name: 'id',
                        type: 'string',
                        title: 'Element ID (optional)',
                      },
                    ],
                  },
                ],
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'cta',
      type: 'object',
      title: 'Localized Call to Action',
      description: 'Call to action with translations',
      fields: [
        defineField({
          name: 'ctaText',
          type: 'object',
          title: 'CTA Text',
          description: 'Text for the call to action with translations',
          fields: [
            defineField({
              name: 'es',
              type: 'string',
              title: 'CTA Text (Spanish)',
              description: 'Spanish version of the CTA text',
            }),
            defineField({
              name: 'en',
              type: 'string',
              title: 'CTA Text (English)',
              description: 'English version of the CTA text',
            }),
          ],
        }),
        defineField({
          name: 'ctaLink',
          type: 'string',
          title: 'CTA Link or Route',
          description: 'External link (include https://) or internal route (e.g., /signup)',
          validation: Rule => Rule.required().custom(link => {
            // Allow internal routes (starting with "/") or valid URLs
            if (link.startsWith('/') || /^(https?:\/\/)/.test(link)) {
              return true;
            }
            return 'Link should be an absolute URL or start with "/" for internal routes';
          }),
        }),
        defineField({
          name: 'isExternal',
          type: 'boolean',
          title: 'Is External Link?',
          description: 'Check if this is an external link',
          initialValue: false,
        }),
      ],
    }),
    defineField({
      name: 'media',
      type: 'array',
      title: 'Media',
      description: 'Media elements for this section',
      of: [
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          description: 'Image for this section',
          options: { hotspot: true },
        }),
        defineField({
          name: 'video',
          type: 'file',
          title: 'Video',
          description: 'Video for this section',
        }),
        defineField({
          name: 'externalMedia',
          type: 'object',
          title: 'External Media URL',
          description: 'External media URL for this section',
          fields: [
            defineField({
              name: 'url',
              type: 'string',
              title: 'Media URL',
              description: 'URL of the external media',
            }),
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              description: 'Alternative text for the external media',
            }),
          ],
        }),
      ],
    }),
  ],
})
