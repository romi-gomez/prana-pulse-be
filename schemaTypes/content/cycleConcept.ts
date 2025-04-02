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
      description: 'Ejemplo: Conexión con la Tierra - Presencia Fundamental',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Identificador único generado a partir del ciclo y el título.',
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
      description: 'Ejemplo: Estabilidad y Arraigo',
    }),
    defineField({
      name: 'description',
      type: 'array',
      title: 'Descripción General',
      description: 'Texto introductorio del concepto.',
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
            defineField({ 
              name: 'description', 
              type: 'array', 
              title: 'Descripción', 
              of: [{ type: 'block' }] 
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'startingPoint',
      type: 'object',
      title: 'De Dónde Partimos',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Título de la Sección',
          description: 'Ejemplo: Inseguridad y Desarraigo',
        }),
        defineField({
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          of: [{ type: 'block' }],
        }),
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
                defineField({ name: 'area', type: 'string', title: 'Área (Ej. Emocionalmente, Físicamente)' }),
                defineField({ 
                  name: 'description', 
                  type: 'array', 
                  title: 'Descripción', 
                  of: [{ type: 'block' }] 
                }),
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
        defineField({
          name: 'title',
          type: 'string',
          title: 'Título de la Sección',
          description: 'Ejemplo: El Camino Hacia la Estabilidad',
        }),
        defineField({
          name: 'description',
          type: 'array',
          title: 'Descripción Breve',
          of: [{ type: 'block' }],
        }),
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
            defineField({ 
              name: 'from', 
              type: 'array', 
              title: 'De Dónde Partimos', 
              of: [{ type: 'block' }] 
            }),
            defineField({ 
              name: 'to', 
              type: 'array', 
              title: 'Hacia Dónde Vamos', 
              of: [{ type: 'block' }] 
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'transformation',
      type: 'object',
      title: 'Transformación',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Título de la Sección',
          description: 'Ejemplo: Transformación y Armonía',
        }),
        defineField({
          name: 'description',
          type: 'array',
          title: 'Descripción',
          of: [{ type: 'block' }],
        }),
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
            defineField({
              name: 'message',
              type: 'array',
              title: 'Mensaje del Oráculo',
              description: 'Texto enriquecido para el mensaje del oráculo.',
              of: [{ type: 'block' }],
            }),
            defineField({
              name: 'invitations',
              type: 'array',
              title: 'Invitaciones del Oráculo',
              of: [
                defineField({
                  name: 'invitation',
                  type: 'object',
                  title: 'Invitación del Oráculo',
                  fields: [
                    defineField({
                      name: 'title',
                      type: 'string',
                      title: 'Título de la Invitación',
                      description: 'Ejemplo: "Conéctate con la Naturaleza"',
                    }),
                    defineField({
                      name: 'description',
                      type: 'array',
                      title: 'Descripción de la Invitación',
                      of: [{ type: 'block' }],
                    }),
                  ],
                }),
              ],
            }),
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
            defineField({
              name: 'title',
              type: 'string',
              title: 'Título de la Práctica',
              description: 'Ejemplo: "Meditación de Enraizamiento"',
            }),
            defineField({
              name: 'description',
              type: 'array',
              title: 'Descripción de la Práctica',
              of: [{ type: 'block' }],
            }),
            defineField({
              name: 'steps',
              type: 'array',
              title: 'Pasos de la Práctica',
              of: [
                defineField({
                  name: 'step',
                  type: 'object',
                  title: 'Paso',
                  fields: [
                    defineField({
                      name: 'title',
                      type: 'string',
                      title: 'Título del Paso',
                      description: 'Ejemplo: "Paso 1: Encuentra un lugar tranquilo"',
                    }),
                    defineField({
                      name: 'description',
                      type: 'array',
                      title: 'Descripción del Paso',
                      of: [{ type: 'block' }],
                    }),
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
            defineField({
              name: 'text',
              type: 'string',
              title: 'Texto de la Afirmación',
              description: 'Ejemplo: "Estoy firmemente conectado/a con la tierra y presente en mi cuerpo"',
            }),
            defineField({
              name: 'description',
              type: 'array',
              title: 'Descripción o Contexto',
              of: [{ type: 'block' }],
            }),
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
            defineField({ name: 'title', type: 'string', title: 'Título de la Actividad' }),
            defineField({ 
              name: 'description', 
              type: 'array', 
              title: 'Descripción', 
              of: [{ type: 'block' }] 
            }),
            defineField({ 
              name: 'media', 
              type: 'array', 
              title: 'Archivos Asociados', 
              of: [defineField({ type: 'string', name: 'media' })] 
            }),
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
            defineField({ name: 'title', type: 'string', title: 'Título de la Meditación' }),
            defineField({ 
              name: 'description', 
              type: 'array', 
              title: 'Descripción', 
              of: [{ type: 'block' }] 
            }),
            defineField({ 
              name: 'media', 
              type: 'array', 
              title: 'Archivos Asociados', 
              of: [defineField({ type: 'string', name: 'media' })] 
            }),
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
            defineField({ name: 'title', type: 'string', title: 'Título de la Meditación' }),
            defineField({ 
              name: 'description', 
              type: 'array', 
              title: 'Descripción', 
              of: [{ type: 'block' }] 
            }),
            defineField({ 
              name: 'media', 
              type: 'array', 
              title: 'Archivos Asociados', 
              of: [defineField({ type: 'string', name: 'media' })] 
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
          of: [
            defineField({
              name: 'imageItem',
              type: 'object',
              title: 'Imagen',
              fields: [
                defineField({
                  name: 'url',
                  type: 'string',
                  title: 'URL de la Imagen',
                }),
                defineField({
                  name: 'alt',
                  type: 'string',
                  title: 'Texto Alternativo',
                  description: 'Descripción de la imagen para accesibilidad',
                }),
                defineField({
                  name: 'caption',
                  type: 'string',
                  title: 'Leyenda',
                  description: 'Texto descriptivo que aparece debajo de la imagen',
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'videos',
          type: 'array',
          title: 'Videos',
          of: [
            defineField({
              name: 'video',
              type: 'object',
              title: 'Video',
              fields: [
                defineField({
                  name: 'url',
                  type: 'string',
                  title: 'URL del Video',
                }),
                defineField({
                  name: 'title',
                  type: 'string',
                  title: 'Título del Video',
                }),
                defineField({
                  name: 'description',
                  type: 'text',
                  title: 'Descripción del Video',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
