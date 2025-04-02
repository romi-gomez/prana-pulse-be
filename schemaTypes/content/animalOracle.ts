import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'animalOracle',
  type: 'document',
  title: 'Animals Oracle Cards',
  fields: [
    defineField({
      name: 'animalName',
      type: 'string',
      title: 'Nombre del Animal',
      description: 'Ejemplo: Elefante',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Este campo actúa como identificador único.',
      options: {
        source: 'animalName', // Generado automáticamente desde el nombre
        maxLength: 96,
      },
    }),
    defineField({
      name: 'keyConcept',
      type: 'string',
      title: 'Concepto Clave',
      description: 'Ejemplo: Presencia Fundamental',
    }),
    defineField({
      name: 'symbolism',
      type: 'object',
      title: 'Explicación del Simbolismo',
      fields: [
        defineField({
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio sobre el simbolismo del animal.',
          of: [defineField({ type: 'block', name: 'content' })],
        }),
        defineField({
          name: 'description',
          type: 'array',
          title: 'Descripción del Simbolismo',
          description: 'Lista de aspectos o explicaciones simbólicas.',
          of: [defineField({ type: 'block', name: 'content' })],
        }),
      ],
    }),
    defineField({
      name: 'energyDescription',
      type: 'array',
      title: 'Descripción Energética',
      description: 'Texto para describir la energía representada por el animal.',
      of: [defineField({ type: 'block', name: 'content' })],
    }),
    defineField({
      name: 'oracleMessage',
      type: 'object',
      title: 'Mensaje del Oráculo',
      fields: [
        defineField({
          name: 'message',
          type: 'array',
          title: 'Mensaje Principal',
          description: 'El mensaje principal del animal oráculo.',
          of: [defineField({ type: 'block', name: 'content' })],
        }),
      ],
    }),
    defineField({
      name: 'oracleInvitation',
      type: 'object',
      title: 'Invitación del Oráculo',
      fields: [
        defineField({
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio para las invitaciones.',
          of: [defineField({ type: 'block', name: 'content' })],
        }),
        defineField({
          name: 'invitations',
          type: 'array',
          title: 'Lista de Invitaciones',
          of: [
            defineField({
              name: 'invitation',
              type: 'object',
              title: 'Invitación',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Título de la Invitación' }),
                defineField({ 
                  name: 'description', 
                  type: 'array', 
                  title: 'Descripción', 
                  of: [defineField({ type: 'block', name: 'content' })] 
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'activityProposal',
      type: 'object',
      title: 'Propuesta de Actividad',
      fields: [
        defineField({
          name: 'description',
          type: 'array',
          title: 'Descripción',
          description: 'Actividad principal inspirada en el mensaje del animal.',
          of: [defineField({ type: 'block', name: 'content' })],
        }),
      ],
    }),
    defineField({
      name: 'relatedConcept',
      type: 'object',
      title: 'Concepto Relacionado de Prana Pulse',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Título del Concepto',
          description: 'Ejemplo: Presencia Fundamental',
        }),
        defineField({
          name: 'description',
          type: 'array',
          title: 'Descripción del Concepto',
          of: [defineField({ type: 'block', name: 'content' })],
        }),
      ],
    }),
    defineField({
      name: 'affirmation',
      type: 'array',
      title: 'Afirmaciones',
      description: 'Lista de afirmaciones relacionadas con el animal.',
      of: [
        defineField({
          name: 'affirmationItem',
          type: 'object',
          title: 'Afirmación',
          fields: [
            defineField({
              name: 'text',
              type: 'array',
              title: 'Texto de la Afirmación',
              of: [defineField({ type: 'block', name: 'content' })],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'weeklyPrediction',
      type: 'object',
      title: 'Mensaje Predictivo para la Semana',
      fields: [
        defineField({
          name: 'description',
          type: 'array',
          title: 'Descripción',
          description: 'El mensaje predictivo principal relacionado con el animal.',
          of: [defineField({ type: 'block', name: 'content' })],
        }),
      ],
    }),
    defineField({
      name: 'weeklyInvitation',
      type: 'object',
      title: 'Invitación Semanal del Oráculo',
      fields: [
        defineField({
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio para las invitaciones semanales.',
          of: [defineField({ type: 'block', name: 'content' })],
        }),
        defineField({
          name: 'items',
          type: 'array',
          title: 'Lista de Invitaciones',
          of: [
            defineField({
              name: 'invitation',
              type: 'object',
              title: 'Invitación',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Título de la Invitación' }),
                defineField({ 
                  name: 'content', 
                  type: 'array', 
                  title: 'Contenido', 
                  of: [defineField({ type: 'block', name: 'content' })] 
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'interpretation',
      type: 'array',
      title: 'Interpretación del Mensaje Predictivo',
      description: 'Lista de interpretaciones relacionadas con el mensaje semanal.',
      of: [defineField({ type: 'block', name: 'content' })],
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
          of: [defineField({ type: 'string' })],
        }),
        defineField({
          name: 'videos',
          type: 'array',
          title: 'Videos',
          of: [defineField({ type: 'string' })],
        }),
        defineField({
          name: 'audios',
          type: 'array',
          title: 'Audios',
          of: [defineField({ type: 'string' })],
        }),
        defineField({
          name: 'links',
          type: 'array',
          title: 'Enlaces Externos',
          of: [defineField({ type: 'string' })],
        }),
        defineField({
          name: 'spotifyPlaylists',
          type: 'array',
          title: 'Playlists de Spotify',
          of: [defineField({ type: 'string' })],
        }),
      ],
    }),
  ],
})
