export default {
  name: 'tarotOracle',
  type: 'document',
  title: 'Tarot Oracle',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre de la Carta',
      description: 'Ejemplo: El Loco',
    },
    {
      name: 'cycle',
      type: 'reference',
      title: 'Ciclo Asociado',
      description: 'Referencia al ciclo correspondiente.',
      to: [{ type: 'cycle' }],
      options: {
        filter: 'slug.current != null',
        disableNew: true,
      },
    },
    {
      name: 'associatedConcept',
      type: 'string',
      title: 'Concepto de Prana Pulse Asociado',
      description: 'Ejemplo: Equilibrio Interior',
    },
    {
      name: 'associatedChakra',
      type: 'string',
      title: 'Chakra Asociado',
      description: 'Ejemplo: Chakra Raíz',
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Palabras Clave del Tarot',
      of: [{ type: 'string', title: 'Palabra Clave' }],
    },
    {
      name: 'mainMessage',
      type: 'array',
      title: 'Mensaje Principal',
      description: 'Descripción general del mensaje de la carta.',
      of: [{ type: 'block' }],
    },
    {
      name: 'symbolism',
      type: 'array',
      title: 'Simbolismo',
      description: 'Simbolismo de la carta en el ciclo asociado.',
      of: [{ type: 'block' }],
    },
    {
      name: 'energyDynamics',
      type: 'object',
      title: 'Energía en Juego',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para las dinámicas energéticas.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Estados Energéticos',
          of: [
            {
              type: 'object',
              title: 'Estado Energético',
              fields: [
                { name: 'state', type: 'string', title: 'Estado (En Equilibrio, En Desequilibrio, Exceso de Energía)' },
                { name: 'description', type: 'array', title: 'Descripción del Estado Energético', of: [{ type: 'block' }] },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'advice',
      type: 'object',
      title: 'Consejo de la Carta',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para los consejos.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Consejos',
          of: [{ type: 'string', title: 'Consejo' }],
        },
      ],
    },
    {
      name: 'intuitivePractice',
      type: 'array',
      title: 'Práctica Intuitiva',
      description: 'Ejemplo: Ejercicio de conexión con la carta.',
      of: [{ type: 'block' }],
    },
    {
      name: 'predictiveInsights',
      type: 'array',
      title: 'Mensajes Predictivos',
      description: 'Cada mensaje predictivo incluye su interpretación y reflexión final.',
      of: [
        {
          type: 'object',
          title: 'Mensaje Predictivo',
          fields: [
            {
              name: 'predictiveMessage',
              type: 'array',
              title: 'Mensaje Predictivo',
              of: [{ type: 'block' }],
            },
            {
              name: 'interpretation',
              type: 'array',
              title: 'Interpretación',
              description: 'Interpretación del mensaje predictivo.',
              of: [{ type: 'block' }],
            },
            {
              name: 'reflection',
              type: 'array',
              title: 'Reflexión Final',
              description: 'Reflexión asociada al mensaje predictivo.',
              of: [{ type: 'block' }],
            },
          ],
        },
      ],
    },
    {
      name: 'closing',
      type: 'array',
      title: 'Cierre del Tarot',
      description: 'Mensaje final de la carta.',
      of: [{ type: 'block' }],
    },
    {
      name: 'affirmation',
      type: 'array',
      title: 'Afirmaciones',
      description: 'Lista de afirmaciones motivadoras asociadas a la carta.',
      of: [
        {
          type: 'object',
          title: 'Afirmación',
          fields: [
            {
              name: 'text',
              type: 'string',
              title: 'Texto de la Afirmación',
            },
          ],
        },
      ],
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
