import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'animalOracle',
  type: 'document',
  title: 'Animals Oracle Cards',
  description: 'Oracle cards with animal symbolism and messages',
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
      description: 'Información sobre el simbolismo del animal',
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
      description: 'Mensaje principal del oráculo del animal',
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
      description: 'Invitaciones y propuestas del oráculo',
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
          description: 'Lista de invitaciones específicas del oráculo',
          of: [
            defineField({
              name: 'invitation',
              type: 'object',
              title: 'Invitación',
              description: 'Una invitación específica del oráculo',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Título de la Invitación', description: 'Título breve para esta invitación' }),
                defineField({ 
                  name: 'description', 
                  type: 'array', 
                  title: 'Descripción', 
                  description: 'Descripción detallada de la invitación',
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
      description: 'Propuesta de actividad relacionada con el animal',
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
      description: 'Concepto de Prana Pulse relacionado con este animal',
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
          description: 'Descripción detallada del concepto relacionado',
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
          description: 'Una afirmación individual',
          fields: [
            defineField({
              name: 'text',
              type: 'array',
              title: 'Texto de la Afirmación',
              description: 'El texto de la afirmación',
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
      description: 'Mensaje predictivo semanal relacionado con el animal',
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
      description: 'Invitaciones semanales del oráculo',
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
          description: 'Lista de invitaciones semanales específicas',
          of: [
            defineField({
              name: 'invitation',
              type: 'object',
              title: 'Invitación',
              description: 'Una invitación semanal específica',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Título de la Invitación', description: 'Título breve para esta invitación semanal' }),
                defineField({ 
                  name: 'content', 
                  type: 'array', 
                  title: 'Contenido', 
                  description: 'Contenido detallado de la invitación semanal',
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
      description: 'Archivos multimedia relacionados con el animal',
      fields: [
        defineField({
          name: 'images',
          type: 'array',
          title: 'Imágenes',
          description: 'Lista de imágenes relacionadas con el animal',
          of: [defineField({ type: 'string', description: 'URL de la imagen' })],
        }),
        defineField({
          name: 'videos',
          type: 'array',
          title: 'Videos',
          description: 'Lista de videos relacionados con el animal',
          of: [defineField({ type: 'string', description: 'URL del video' })],
        }),
        defineField({
          name: 'audios',
          type: 'array',
          title: 'Audios',
          description: 'Lista de audios relacionados con el animal',
          of: [defineField({ type: 'string', description: 'URL del audio' })],
        }),
        defineField({
          name: 'links',
          type: 'array',
          title: 'Enlaces Externos',
          description: 'Lista de enlaces externos relacionados con el animal',
          of: [defineField({ type: 'string', description: 'URL del enlace' })],
        }),
        defineField({
          name: 'spotifyPlaylists',
          type: 'array',
          title: 'Playlists de Spotify',
          description: 'Lista de playlists de Spotify relacionadas con el animal',
          of: [defineField({ type: 'string', description: 'URL de la playlist' })],
        }),
      ],
    }),
  ],
})
