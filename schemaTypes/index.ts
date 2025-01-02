import cycleConcept from './cycleConcept'
import animalOracle from './animalOracle'
import pageSection from './pageSection'
import tarotOracle from './tarotOracle'
import salesPageSection from './salesPageSection'
import cycle from './cycleGeneral'

export const schemaTypes = [cycleConcept, animalOracle, pageSection, tarotOracle, cycle, salesPageSection ]
export default {
    name: 'salesPageSection',
    type: 'document',
    title: 'Sales Page Section',
    fields: [
      {
        name: 'id',
        type: 'string',
        title: 'Section ID',
        description: 'Unique identifier for this section.',
      },
      {
        name: 'title',
        type: 'string',
        title: 'Section Title',
        description: 'Title of the section, e.g., Hero Section.',
      },
      {
        name: 'headline',
        type: 'string',
        title: 'Headline',
        description: 'Main headline for the section.',
      },
      {
        name: 'subheadline',
        type: 'string',
        title: 'Subheadline',
        description: 'Supporting headline for the section.',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Main body text or description for the section.',
      },
      {
        name: 'cta',
        type: 'object',
        title: 'Call to Action',
        description: 'Details for the call-to-action button.',
        fields: [
          {
            name: 'label',
            type: 'string',
            title: 'CTA Label',
            description: 'Text for the call-to-action button.',
          },
          {
            name: 'url',
            type: 'url',
            title: 'CTA URL',
            description: 'Link for the call-to-action button.',
          },
        ],
      },
      {
        name: 'media',
        type: 'image',
        title: 'Media',
        description: 'Optional image or media for the section.',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'order',
        type: 'number',
        title: 'Order',
        description: 'The order in which this section should appear.',
      },
    ],
  };
  