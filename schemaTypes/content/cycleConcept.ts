import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'cycleConcept',
  type: 'document',
  title: 'Cycles Concepts',
  fields: [
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
      name: 'title',
      type: 'string',
      title: 'Título del Concepto',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: (document) => {
          const cycle = document.cycle as { name?: string } | undefined;
          return `${cycle?.name || ''}-${document.title || ''}`;
        },
        maxLength: 96,
      },
    }),
    defineField({
      name: 'keyConcept',
      type: 'string',
      title: 'Concepto Clave',
    }),
    defineField({
      name: 'description',
      type: 'array',
      title: 'Descripción General',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'keyAspects',
      type: 'array',
      title: 'Aspectos Clave',
      of: [
        defineField({
          name: 'keyAspect',
          type: 'object',
          title: 'Aspecto Clave',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Título del Aspecto' }),
            defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'startingPoint',
      type: 'object',
      title: 'De Dónde Partimos',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Título de la Sección' }),
        defineField({ name: 'introduction', type: 'array', of: [{ type: 'block' }] }),
        defineField({
          name: 'items',
          type: 'array',
          title: 'Lista de Desafíos',
          of: [
            defineField({
              name: 'challenge',
              type: 'object',
              title: 'Desafío',
              fields: [
                defineField({ name: 'area', type: 'string', title: 'Área' }),
                defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'pathToBalance',
      type: 'object',
      title: 'El Camino Hacia',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Título de la Sección' }),
        defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
      ],
    }),
    defineField({
      name: 'objectives',
      type: 'array',
      title: 'Objetivos del Viaje',
      of: [
        defineField({
          name: 'objective',
          type: 'object',
          title: 'Objetivo',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Título del Objetivo' }),
            defineField({ name: 'from', type: 'array', of: [{ type: 'block' }] }),
            defineField({ name: 'to', type: 'array', of: [{ type: 'block' }] }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'transformation',
      type: 'object',
      title: 'Transformación',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Título de la Sección' }),
        defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
      ],
    }),
    defineField({
      name: 'oracleMessages',
      type: 'array',
      title: 'Mensajes del Oráculo',
      of: [
        defineField({
          name: 'oracleMessage',
          type: 'object',
          title: 'Mensaje del Oráculo',
          fields: [
            defineField({ name: 'message', type: 'array', of: [{ type: 'block' }] }),
            defineField({
              name: 'invitations',
              type: 'array',
              title: 'Invitaciones',
              of: [
                defineField({
                  name: 'invitation',
                  type: 'object',
                  title: 'Invitación',
                  fields: [
                    defineField({ name: 'title', type: 'string', title: 'Título de la Invitación' }),
                    defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'oraclePhrases',
      type: 'array',
      title: 'Frases del Oráculo',
      of: [
        defineField({
          name: 'oraclePhrase',
          type: 'object',
          title: 'Frase',
          fields: [
            defineField({ name: 'text', type: 'string', title: 'Texto' }),
            defineField({ name: 'explanation', type: 'array', of: [{ type: 'block' }] }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'practices',
      type: 'array',
      title: 'Prácticas Recomendadas',
      of: [
        defineField({
          name: 'practice',
          type: 'object',
          title: 'Práctica',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Título' }),
            defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
            defineField({
              name: 'steps',
              type: 'array',
              title: 'Pasos',
              of: [
                defineField({
                  name: 'step',
                  type: 'object',
                  title: 'Paso',
                  fields: [
                    defineField({ name: 'title', type: 'string', title: 'Título del Paso' }),
                    defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'affirmations',
      type: 'array',
      title: 'Afirmaciones',
      of: [
        defineField({
          name: 'affirmation',
          type: 'object',
          title: 'Afirmación',
          fields: [
            defineField({ name: 'text', type: 'string', title: 'Texto de la Afirmación' }),
            defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'activities',
      type: 'array',
      title: 'Propuesta de Actividades',
      of: [
        defineField({
          name: 'activity',
          type: 'object',
          title: 'Actividad',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Título' }),
            defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
            defineField({ name: 'media', type: 'array', title: 'Archivos Asociados', of: [{ type: 'string' }] }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'guidedMeditations',
      type: 'array',
      title: 'Meditaciones Guiadas',
      of: [
        defineField({
          name: 'guidedMeditation',
          type: 'object',
          title: 'Meditación Guiada',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Título' }),
            defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
            defineField({ name: 'media', type: 'array', title: 'Archivos Asociados', of: [{ type: 'string' }] }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'dailyMeditations',
      type: 'array',
      title: 'Meditaciones Cotidianas',
      of: [
        defineField({
          name: 'dailyMeditation',
          type: 'object',
          title: 'Meditación Cotidiana',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Título' }),
            defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
            defineField({ name: 'media', type: 'array', title: 'Archivos Asociados', of: [{ type: 'string' }] }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'practicesAndTools',
      type: 'array',
      title: 'Prácticas y Herramientas',
      of: [
        defineField({
          name: 'practiceItem',
          type: 'object',
          title: 'Práctica o Herramienta',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Título de la Práctica' }),
            defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'triggers',
      type: 'array',
      title: 'Disparadores',
      of: [
        defineField({
          name: 'triggerItem',
          type: 'object',
          title: 'Disparador',
          fields: [
            defineField({ name: 'text', type: 'array', of: [{ type: 'block' }] }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'reflectionQuestions',
      type: 'array',
      title: 'Preguntas para Reflexionar',
      of: [
        defineField({
          name: 'questionItem',
          type: 'object',
          title: 'Pregunta para Reflexionar',
          fields: [
            defineField({ name: 'text', type: 'string', title: 'Texto de la Pregunta' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'chatGPTPrompts',
      type: 'array',
      title: 'chatGPT Prompts',
      of: [
        defineField({
          name: 'promptItem',
          type: 'object',
          title: 'Prompt para ChatGPT',
          fields: [
            defineField({
              name: 'text',
              type: 'array',
              of: [{ type: 'block' }],
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
        defineField({ name: 'images', type: 'array', title: 'Imágenes', of: [{ type: 'string' }] }),
        defineField({ name: 'videos', type: 'array', title: 'Videos', of: [{ type: 'string' }] }),
        defineField({ name: 'audios', type: 'array', title: 'Audios', of: [{ type: 'string' }] }),
        defineField({ name: 'links', type: 'array', title: 'Enlaces Externos', of: [{ type: 'string' }] }),
        defineField({ name: 'spotifyPlaylists', type: 'array', title: 'Playlists de Spotify', of: [{ type: 'string' }] }),
      ],
    }),
  ],
})