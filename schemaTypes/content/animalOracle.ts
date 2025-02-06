export default {
  name: 'animalOracle',
  type: 'document',
  title: 'Animals Oracle Cards',
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
          description: 'Texto introductorio sobre el simbolismo del animal.',
          of: [{ type: 'block' }],
        },
        {
          name: 'description',
          type: 'array',
          title: 'Descripción del Simbolismo',
          description: 'Lista de aspectos o explicaciones simbólicas.',
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      name: 'energyDescription',
      type: 'array',
      title: 'Descripción Energética',
      description: 'Texto para describir la energía representada por el animal.',
      of: [{ type: 'block' }],
    },
    {
      name: 'oracleMessage',
      type: 'object',
      title: 'Mensaje del Oráculo',
      fields: [
        {
          name: 'message',
          type: 'array',
          title: 'Mensaje Principal',
          description: 'El mensaje principal del animal oráculo.',
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
          description: 'Texto introductorio para las invitaciones.',
          of: [{ type: 'block' }],
        },
        {
          name: 'invitations',
          type: 'array',
          title: 'Lista de Invitaciones',
          of: [
            {
              type: 'object',
              title: 'Invitación',
              fields: [
                { name: 'title', type: 'string', title: 'Título de la Invitación' },
                { name: 'description', type: 'array', title: 'Descripción', of: [{ type: 'block' }] },
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
          name: 'description',
          type: 'array',
          title: 'Descripción',
          description: 'Actividad principal inspirada en el mensaje del animal.',
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
          name: 'title',
          type: 'string',
          title: 'Título del Concepto',
          description: 'Ejemplo: Presencia Fundamental',
        },
        {
          name: 'description',
          type: 'array',
          title: 'Descripción del Concepto',
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      name: 'affirmation',
      type: 'array',
      title: 'Afirmaciones',
      description: 'Lista de afirmaciones relacionadas con el animal.',
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
    {
      name: 'weeklyPrediction',
      type: 'object',
      title: 'Mensaje Predictivo para la Semana',
      fields: [
        {
          name: 'description',
          type: 'array',
          title: 'Descripción',
          description: 'El mensaje predictivo principal relacionado con el animal.',
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
          description: 'Texto introductorio para las invitaciones semanales.',
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
      type: 'array',
      title: 'Interpretación del Mensaje Predictivo',
      description: 'Lista de interpretaciones relacionadas con el mensaje semanal.',
      of: [{ type: 'block' }],
    },

    {
      name: 'media',
      type: 'object',
      title: 'Archivos Multimedia Asociados',
      fields: [
        {
          name: 'images',
          type: 'array',
          title: 'Imágenes',
          of: [{ type: 'url' }],
        },
        {
          name: 'videos',
          type: 'array',
          title: 'Videos',
          of: [{ type: 'url' }],
        },
        {
          name: 'audios',
          type: 'array',
          title: 'Audios',
          of: [{ type: 'url' }],
        },
        {
          name: 'links',
          type: 'array',
          title: 'Enlaces Externos',
          of: [{ type: 'url' }],
        },
        {
          name: 'spotifyPlaylists',
          type: 'array',
          title: 'Playlists de Spotify',
          of: [{ type: 'url' }],
        },
      ],
    },
  ],
};
