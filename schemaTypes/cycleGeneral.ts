export default {
  name: 'cycleGeneral',
  type: 'document',
  title: 'Cycle General',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre del Ciclo',
    },
    {
      name: 'chakra',
      type: 'string',
      title: 'Chakra Asociado',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Este campo actúa como identificador único.',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'concepts',
      type: 'object',
      title: 'Conceptos Asociados',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para los conceptos.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Conceptos',
          of: [
            {
              type: 'reference',
              title: 'Concepto Referenciado',
              to: [{ type: 'cycleConcept' }],
              options: {
                filter: 'slug.current != null',
                disableNew: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'generalDescription',
      type: 'array',
      title: 'Descripción General',
      description: 'Introducción y visión general del ciclo.',
      of: [{ type: 'block' }],
    },
    {
      name: 'startingPoint',
      type: 'object',
      title: 'De Dónde Partimos',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Desafíos',
          of: [
            {
              type: 'object',
              title: 'Desafío',
              fields: [
                { name: 'category', type: 'string', title: 'Categoría (Ej. Emocionalmente, Físicamente)' },
                { name: 'description', type: 'array', title: 'Descripción del Desafío', of: [{ type: 'block' }] },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'pathToStability',
      type: 'object',
      title: 'El Camino Hacia la Estabilidad',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Descripción del Camino',
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      name: 'objectives',
      type: 'object',
      title: 'Objetivos del Viaje',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Objetivos',
          of: [
            {
              type: 'object',
              title: 'Objetivo',
              fields: [
                { name: 'title', type: 'string', title: 'Título del Objetivo' },
                { name: 'from', type: 'array', title: 'De Dónde Partimos', of: [{ type: 'block' }] },
                { name: 'to', type: 'array', title: 'Hacia Dónde Vamos', of: [{ type: 'block' }] },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'transformation',
      type: 'object',
      title: 'Transformación y Arraigo',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Detalles de Transformación',
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      name: 'oracleMessage',
      type: 'array',
      title: 'Mensaje del Oráculo',
      description: 'Mensaje central del oráculo para este ciclo.',
      of: [{ type: 'block' }],
    },
    {
      name: 'oracleInvitation',
      type: 'object',
      title: 'Invitación del Oráculo',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Invitaciones',
          of: [
            {
              type: 'object',
              title: 'Invitación',
              fields: [
                { name: 'title', type: 'string', title: 'Título de la Invitación' },
                { name: 'content', type: 'array', title: 'Descripción de la Invitación', of: [{ type: 'block' }] },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'affirmation',
      type: 'object',
      title: 'Afirmaciones',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para las afirmaciones.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Afirmaciones',
          of: [
            {
              type: 'object',
              title: 'Afirmación',
              fields: [
                {
                  name: 'text',
                  type: 'array',
                  title: 'Texto de la Afirmación',
                  of: [{ type: 'block' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'activities',
      type: 'object',
      title: 'Propuestas de Actividad',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para las actividades.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Actividades',
          of: [
            {
              type: 'object',
              title: 'Actividad',
              fields: [
                { name: 'title', type: 'string', title: 'Título de la Actividad' },
                { name: 'instructions', type: 'array', title: 'Instrucciones', of: [{ type: 'block' }] },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      title: 'Imágenes del Ciclo',
      of: [
        {
          type: 'url',
          title: 'URL de la Imagen',
        },
      ],
    },
    {
      name: 'videos',
      type: 'array',
      title: 'Videos del Ciclo',
      of: [
        {
          type: 'url',
          title: 'URL del Video',
        },
      ],
    },
    {
      name: 'audio',
      type: 'array',
      title: 'Audios del Ciclo',
      of: [
        {
          type: 'url',
          title: 'URL del Audio',
        },
      ],
    },
    {
      name: 'externalLinks',
      type: 'array',
      title: 'Enlaces Externos',
      of: [
        {
          type: 'object',
          title: 'Enlace',
          fields: [
            { name: 'platform', type: 'string', title: 'Plataforma (YouTube, Spotify, etc.)' },
            { name: 'url', type: 'url', title: 'URL del Enlace' },
          ],
        },
      ],
    },
  ],
};
