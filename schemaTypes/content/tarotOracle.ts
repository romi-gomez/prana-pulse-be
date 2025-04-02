import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'tarotOracle',
  type: 'document',
  title: 'Tarot Oracle Cards',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nombre de la Carta',
      description: 'Ejemplo: El Loco',
    }),
    defineField({
      name: 'cycle',
      type: 'reference',
      title: 'Ciclo Asociado',
      description: 'Referencia al ciclo correspondiente.',
      to: [{ type: 'cycle' }],
      options: {
        filter: 'slug.current != null',
        disableNew: true,
      },
    }),
    defineField({
      name: 'associatedConcept',
      type: 'string',
      title: 'Concepto de Prana Pulse Asociado',
      description: 'Ejemplo: Equilibrio Interior',
    }),
    defineField({
      name: 'associatedChakra',
      type: 'string',
      title: 'Chakra Asociado',
      description: 'Ejemplo: Chakra Raíz',
    }),
    defineField({
      name: 'keywords',
      type: 'array',
      title: 'Palabras Clave del Tarot',
      of: [defineField({ type: 'string', name: 'keyword' })],
    }),
    defineField({
      name: 'mainMessage',
      type: 'array',
      title: 'Mensaje Principal',
      description: 'Descripción general del mensaje de la carta.',
      of: [defineField({ type: 'block', name: 'content' })],
    }),
    defineField({
      name: 'symbolism',
      type: 'array',
      title: 'Simbolismo',
      description: 'Simbolismo de la carta en el ciclo asociado.',
      of: [defineField({ type: 'block', name: 'content' })],
    }),
    defineField({
      name: 'energyDynamics',
      type: 'object',
      title: 'Energía en Juego',
      fields: [
        defineField({
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para las dinámicas energéticas.',
          of: [defineField({ type: 'block', name: 'content' })],
        }),
        defineField({
          name: 'items',
          type: 'array',
          title: 'Lista de Estados Energéticos',
          of: [
            defineField({
              name: 'energyState',
              type: 'object',
              title: 'Estado Energético',
              fields: [
                defineField({ 
                  name: 'state', 
                  type: 'string', 
                  title: 'Estado (En Equilibrio, En Desequilibrio, Exceso de Energía)' 
                }),
                defineField({ 
                  name: 'description', 
                  type: 'array', 
                  title: 'Descripción del Estado Energético', 
                  of: [defineField({ type: 'block', name: 'content' })] 
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'advice',
      type: 'object',
      title: 'Consejo de la Carta',
      fields: [
        defineField({
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para los consejos.',
          of: [defineField({ type: 'block', name: 'content' })],
        }),
        defineField({
          name: 'items',
          type: 'array',
          title: 'Lista de Consejos',
          of: [defineField({ type: 'string', title: 'Consejo', name: 'advice' })],
        }),
      ],
    }),
    defineField({
      name: 'intuitivePractice',
      type: 'array',
      title: 'Práctica Intuitiva',
      description: 'Ejemplo: Ejercicio de conexión con la carta.',
      of: [defineField({ type: 'block', name: 'content' })],
    }),
    defineField({
      name: 'predictiveInsights',
      type: 'array',
      title: 'Mensajes Predictivos',
      description: 'Cada mensaje predictivo incluye su interpretación y reflexión final.',
      of: [
        defineField({
          name: 'predictiveInsight',
          type: 'object',
          title: 'Mensaje Predictivo',
          fields: [
            defineField({
              name: 'predictiveMessage',
              type: 'array',
              title: 'Mensaje Predictivo',
              of: [defineField({ type: 'block', name: 'content' })],
            }),
            defineField({
              name: 'interpretation',
              type: 'array',
              title: 'Interpretación',
              description: 'Interpretación del mensaje predictivo.',
              of: [defineField({ type: 'block', name: 'content' })],
            }),
            defineField({
              name: 'reflection',
              type: 'array',
              title: 'Reflexión Final',
              description: 'Reflexión asociada al mensaje predictivo.',
              of: [defineField({ type: 'block', name: 'content' })],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'closing',
      type: 'array',
      title: 'Cierre del Tarot',
      description: 'Mensaje final de la carta.',
      of: [defineField({ type: 'block', name: 'content' })],
    }),
    defineField({
      name: 'affirmation',
      type: 'array',
      title: 'Afirmaciones',
      description: 'Lista de afirmaciones motivadoras asociadas a la carta.',
      of: [
        defineField({
          name: 'affirmationItem',
          type: 'object',
          title: 'Afirmación',
          fields: [
            defineField({
              name: 'text',
              type: 'string',
              title: 'Texto de la Afirmación',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'media',
      type: 'object',
      title: 'Archivos Multimedia Asociados',
      fields: [
        defineField({
          name: 'images',
          type: 'array',
          title: 'Imágenes',
          of: [defineField({ type: 'string', name: 'imageUrl' })],
        }),
        defineField({
          name: 'videos',
          type: 'array',
          title: 'Videos',
          of: [defineField({ type: 'string', name: 'video' })],
        }),
        defineField({
          name: 'audios',
          type: 'array',
          title: 'Audios',
          of: [defineField({ type: 'string', name: 'audio' })],
        }),
        defineField({
          name: 'links',
          type: 'array',
          title: 'Enlaces Externos',
          of: [defineField({ type: 'string', name: 'link' })],
        }),
        defineField({
          name: 'spotifyPlaylists',
          type: 'array',
          title: 'Playlists de Spotify',
          of: [defineField({ type: 'string', name: 'spotifyPlaylist' })],
        }),
      ],
    }),
  ],
})
