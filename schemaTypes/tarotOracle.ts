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
      name: 'associatedConcept',
      type: 'string',
      title: 'Concepto de Prana Pulse Asociado',
      description: 'Ejemplo: Presencia Fundamental',
    },
    {
      name: 'associatedChakra',
      type: 'string',
      title: 'Chakra Asociado',
      description: 'Ejemplo: Chakra Raíz',
    },
    {
      name: 'keywords',
      type: 'object',
      title: 'Palabras Clave del Tarot',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para las palabras clave.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Palabras Clave',
          of: [
            {
              type: 'string',
              title: 'Palabra Clave',
            },
          ],
        },
      ],
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
          of: [
            {
              type: 'string',
              title: 'Consejo',
            },
          ],
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
              type: 'string', // Changed from array to string
              title: 'Texto de la Afirmación',
            },
          ],
        },
      ],
    },    
    {
      name: 'predictiveMessage',
      type: 'array',
      title: 'Mensaje Predictivo',
      description: 'Predicción asociada a la carta.',
      of: [{ type: 'block' }],
    },
    {
      name: 'closing',
      type: 'array',
      title: 'Cierre del Tarot',
      description: 'Mensaje final de la carta.',
      of: [{ type: 'block' }],
    },
    {
      name: 'reflection',
      type: 'array',
      title: 'Reflexión Final',
      description: 'Reflexión que resume el mensaje de la carta.',
      of: [{ type: 'block' }],
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
