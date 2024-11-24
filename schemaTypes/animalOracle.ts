export default {
  name: 'animalOracle',
  type: 'document',
  title: 'Animal Oracle',
  fields: [
    {
      name: 'animalName',
      type: 'string',
      title: 'Nombre del Animal',
      description: 'Ejemplo: Elefante',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Este campo actúa como identificador único.',
      options: {
        source: 'animalName', // Generado automáticamente desde el nombre
        maxLength: 96,
      },
    },
    {
      name: 'keyConcept',
      type: 'string',
      title: 'Concepto Clave',
      description: 'Ejemplo: Presencia Fundamental',
    },
    {
      name: 'symbolism',
      type: 'object',
      title: 'Explicación del Simbolismo',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional sobre el simbolismo.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Simbolismos',
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      name: 'energyDescription',
      type: 'object',
      title: 'Descripción Energética',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional sobre la energía.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Descripciones Energéticas',
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      name: 'oracleMessage',
      type: 'object',
      title: 'Mensaje del Oráculo',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para el mensaje del oráculo.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Mensajes',
          of: [{ type: 'block' }],
        },
      ],
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
          description: 'Texto introductorio opcional para las invitaciones.',
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
                { name: 'content', type: 'array', title: 'Descripción', of: [{ type: 'block' }] },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'activityProposal',
      type: 'object',
      title: 'Propuesta de Actividad',
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
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      name: 'relatedConcept',
      type: 'object',
      title: 'Concepto Relacionado de Prana Pulse',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para los conceptos relacionados.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Conceptos Relacionados',
          of: [{ type: 'block' }],
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
      name: 'weeklyPrediction',
      type: 'object',
      title: 'Mensaje Predictivo para la Semana',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para el mensaje predictivo.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Mensajes Predictivos',
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      name: 'weeklyInvitation',
      type: 'object',
      title: 'Invitación Semanal del Oráculo',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para las invitaciones semanales.',
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
                { name: 'content', type: 'array', title: 'Contenido', of: [{ type: 'block' }] },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'interpretation',
      type: 'object',
      title: 'Interpretación del Mensaje Predictivo',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para las interpretaciones.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Interpretaciones',
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      name: 'media',
      type: 'object',
      title: 'Archivos Multimedia',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para los archivos multimedia.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Archivos Multimedia',
          of: [
            {
              type: 'object',
              title: 'Archivo Multimedia',
              fields: [
                { name: 'type', type: 'string', title: 'Tipo (imagen, video, audio, link)' },
                { name: 'url', type: 'url', title: 'URL del Archivo' },
                { name: 'description', type: 'string', title: 'Descripción del Archivo (opcional)' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
