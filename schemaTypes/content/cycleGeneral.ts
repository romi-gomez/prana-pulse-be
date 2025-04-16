import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'cycle',
  type: 'document',
  title: 'Cycles',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nombre del Ciclo',
      description: 'Nombre único del ciclo (ejemplo: Pulsar, Sintonizar, Amplificar).',
    }),
    defineField({
      name: 'chakra',
      type: 'string',
      title: 'Chakra Asociado',
      description: 'El chakra vinculado con este ciclo (opcional).',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Identificador único generado desde el nombre del ciclo.',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainConcept',
      type: 'string',
      title: 'Concepto Principal',
      description: 'Idea o concepto fundamental que define este ciclo (ejemplo: Estabilidad, Conexión, Expansión).',
    }),
    defineField({
      name: 'generalDescription',
      type: 'array',
      title: 'Descripción General',
      description: 'Introducción y visión general del ciclo.',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'Heading 2', value: 'h2' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              defineField({
                name: 'styledSpan',
                type: 'object',
                title: 'Styled Span',
                fields: [
                  { name: 'className', type: 'string', title: 'CSS Class for Span' },
                  { name: 'id', type: 'string', title: 'Element ID (optional)' },
                ],
              }),
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'stateOfEquilibrium',
      type: 'object',
      title: 'Estado de Equilibrio',
      fields: [
        defineField({
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio para describir el estado de equilibrio.',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Heading 1', value: 'h1' },
                { title: 'Heading 2', value: 'h2' },
              ],
              marks: {
                decorators: [
                  { title: 'Bold', value: 'strong' },
                  { title: 'Italic', value: 'em' },
                ],
                annotations: [
                  defineField({
                    name: 'styledSpan',
                    type: 'object',
                    title: 'Styled Span',
                    fields: [
                      { name: 'className', type: 'string', title: 'CSS Class for Span' },
                      { name: 'id', type: 'string', title: 'Element ID (optional)' },
                    ],
                  }),
                ],
              },
            },
          ],
        }),
        defineField({
          name: 'categories',
          type: 'array',
          title: 'Categorías del Equilibrio',
          of: [
            defineField({
              name: 'categoryItem',
              type: 'object',
              title: 'Categoría',
              fields: [
                { name: 'name', type: 'string', title: 'Nombre de la Categoría' },
                defineField({
                  name: 'description',
                  type: 'array',
                  title: 'Descripción',
                  of: [
                    {
                      type: 'block',
                      styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'Heading 1', value: 'h1' },
                        { title: 'Heading 2', value: 'h2' },
                      ],
                      marks: {
                        decorators: [
                          { title: 'Bold', value: 'strong' },
                          { title: 'Italic', value: 'em' },
                        ],
                        annotations: [
                          defineField({
                            name: 'styledSpan',
                            type: 'object',
                            title: 'Styled Span',
                            fields: [
                              { name: 'className', type: 'string', title: 'CSS Class for Span' },
                              { name: 'id', type: 'string', title: 'Element ID (optional)' },
                            ],
                          }),
                        ],
                      },
                    },
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'instabilityAndImbalance',
      type: 'object',
      title: 'Inestabilidad y Desequilibrio',
      fields: [
        defineField({
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio para describir los desafíos.',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Heading 1', value: 'h1' },
                { title: 'Heading 2', value: 'h2' },
              ],
              marks: {
                decorators: [
                  { title: 'Bold', value: 'strong' },
                  { title: 'Italic', value: 'em' },
                ],
                annotations: [
                  defineField({
                    name: 'styledSpan',
                    type: 'object',
                    title: 'Styled Span',
                    fields: [
                      { name: 'className', type: 'string', title: 'CSS Class for Span' },
                      { name: 'id', type: 'string', title: 'Element ID (optional)' },
                    ],
                  }),
                ],
              },
            },
          ],
        }),
        defineField({
          name: 'challenges',
          type: 'array',
          title: 'Desafíos',
          of: [
            defineField({
              name: 'challengeItem',
              type: 'object',
              title: 'Desafío',
              fields: [
                { name: 'category', type: 'string', title: 'Categoría (Ej. Emocional, Mental)' },
                defineField({
                  name: 'description',
                  type: 'array',
                  title: 'Descripción del Desafío',
                  of: [
                    {
                      type: 'block',
                      styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'Heading 1', value: 'h1' },
                        { title: 'Heading 2', value: 'h2' },
                      ],
                      marks: {
                        decorators: [
                          { title: 'Bold', value: 'strong' },
                          { title: 'Italic', value: 'em' },
                        ],
                        annotations: [
                          defineField({
                            name: 'styledSpan',
                            type: 'object',
                            title: 'Styled Span',
                            fields: [
                              { name: 'className', type: 'string', title: 'CSS Class for Span' },
                              { name: 'id', type: 'string', title: 'Element ID (optional)' },
                            ],
                          }),
                        ],
                      },
                    },
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'excessEnergy',
      type: 'object',
      title: 'Exceso de Energía',
      fields: [
        defineField({
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio para describir el exceso de energía.',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Heading 1', value: 'h1' },
                { title: 'Heading 2', value: 'h2' },
              ],
              marks: {
                decorators: [
                  { title: 'Bold', value: 'strong' },
                  { title: 'Italic', value: 'em' },
                ],
                annotations: [
                  defineField({
                    name: 'styledSpan',
                    type: 'object',
                    title: 'Styled Span',
                    fields: [
                      { name: 'className', type: 'string', title: 'CSS Class for Span' },
                      { name: 'id', type: 'string', title: 'Element ID (optional)' },
                    ],
                  }),
                ],
              },
            },
          ],
        }),
        defineField({
          name: 'categories',
          type: 'array',
          title: 'Categorías del Exceso',
          of: [
            defineField({
              name: 'excessEnergyItem',
              type: 'object',
              title: 'Manifestación de Exceso',
              fields: [
                { name: 'name', type: 'string', title: 'Nombre de la Categoría' },
                defineField({
                  name: 'description',
                  type: 'array',
                  title: 'Descripción',
                  of: [
                    {
                      type: 'block',
                      styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'Heading 1', value: 'h1' },
                        { title: 'Heading 2', value: 'h2' },
                      ],
                      marks: {
                        decorators: [
                          { title: 'Bold', value: 'strong' },
                          { title: 'Italic', value: 'em' },
                        ],
                        annotations: [
                          defineField({
                            name: 'styledSpan',
                            type: 'object',
                            title: 'Styled Span',
                            fields: [
                              { name: 'className', type: 'string', title: 'CSS Class for Span' },
                              { name: 'id', type: 'string', title: 'Element ID (optional)' },
                            ],
                          }),
                        ],
                      },
                    },
                  ],
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
          description: 'Ejemplo: El Camino Hacia la Estabilidad.',
        }),
        defineField({
          name: 'description',
          type: 'array',
          title: 'Descripción Breve',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Heading 1', value: 'h1' },
                { title: 'Heading 2', value: 'h2' },
              ],
              marks: {
                decorators: [
                  { title: 'Bold', value: 'strong' },
                  { title: 'Italic', value: 'em' },
                ],
                annotations: [
                  defineField({
                    name: 'styledSpan',
                    type: 'object',
                    title: 'Styled Span',
                    fields: [
                      { name: 'className', type: 'string', title: 'CSS Class for Span' },
                      { name: 'id', type: 'string', title: 'Element ID (optional)' },
                    ],
                  }),
                ],
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'objectives',
      type: 'array',
      title: 'Objetivos del Viaje',
      of: [
        defineField({
          name: 'objectiveItem',
          type: 'object',
          title: 'Objetivo',
          fields: [
            { name: 'title', type: 'string', title: 'Título del Objetivo' },
            defineField({
              name: 'from',
              type: 'array',
              title: 'De Dónde Partimos',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'Heading 1', value: 'h1' },
                    { title: 'Heading 2', value: 'h2' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Bold', value: 'strong' },
                      { title: 'Italic', value: 'em' },
                    ],
                    annotations: [
                      defineField({
                        name: 'styledSpan',
                        type: 'object',
                        title: 'Styled Span',
                        fields: [
                          { name: 'className', type: 'string', title: 'CSS Class for Span' },
                          { name: 'id', type: 'string', title: 'Element ID (optional)' },
                        ],
                      }),
                    ],
                  },
                },
              ],
            }),
            defineField({
              name: 'to',
              type: 'array',
              title: 'Hacia Dónde Vamos',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'Heading 1', value: 'h1' },
                    { title: 'Heading 2', value: 'h2' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Bold', value: 'strong' },
                      { title: 'Italic', value: 'em' },
                    ],
                    annotations: [
                      defineField({
                        name: 'styledSpan',
                        type: 'object',
                        title: 'Styled Span',
                        fields: [
                          { name: 'className', type: 'string', title: 'CSS Class for Span' },
                          { name: 'id', type: 'string', title: 'Element ID (optional)' },
                        ],
                      }),
                    ],
                  },
                },
              ],
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
          description: 'Ejemplo: Transformación y Luz Interior.',
        }),
        defineField({
          name: 'description',
          type: 'array',
          title: 'Descripción',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Heading 1', value: 'h1' },
                { title: 'Heading 2', value: 'h2' },
              ],
              marks: {
                decorators: [
                  { title: 'Bold', value: 'strong' },
                  { title: 'Italic', value: 'em' },
                ],
                annotations: [
                  defineField({
                    name: 'styledSpan',
                    type: 'object',
                    title: 'Styled Span',
                    fields: [
                      { name: 'className', type: 'string', title: 'CSS Class for Span' },
                      { name: 'id', type: 'string', title: 'Element ID (optional)' },
                    ],
                  }),
                ],
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'oracleMessages',
      type: 'array',
      title: 'Mensajes del Oráculo',
      of: [
        defineField({
          name: 'oracleMessageItem',
          type: 'object',
          title: 'Mensaje del Oráculo',
          fields: [
            defineField({
              name: 'message',
              type: 'array',
              title: 'Mensaje del Oráculo',
              description: 'Texto enriquecido para el mensaje del oráculo.',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'Heading 1', value: 'h1' },
                    { title: 'Heading 2', value: 'h2' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Bold', value: 'strong' },
                      { title: 'Italic', value: 'em' },
                    ],
                    annotations: [
                      defineField({
                        name: 'styledSpan',
                        type: 'object',
                        title: 'Styled Span',
                        fields: [
                          { name: 'className', type: 'string', title: 'CSS Class for Span' },
                          { name: 'id', type: 'string', title: 'Element ID (optional)' },
                        ],
                      }),
                    ],
                  },
                },
              ],
            }),
            defineField({
              name: 'invitations',
              type: 'array',
              title: 'Invitaciones del Oráculo',
              of: [
                defineField({
                  name: 'invitationItem',
                  type: 'object',
                  title: 'Invitación del Oráculo',
                  fields: [
                    { name: 'title', type: 'string', title: 'Título de la Invitación' },
                    defineField({
                      name: 'description',
                      type: 'array',
                      title: 'Descripción',
                      of: [
                        {
                          type: 'block',
                          styles: [
                            { title: 'Normal', value: 'normal' },
                            { title: 'Heading 1', value: 'h1' },
                            { title: 'Heading 2', value: 'h2' },
                          ],
                          marks: {
                            decorators: [
                              { title: 'Bold', value: 'strong' },
                              { title: 'Italic', value: 'em' },
                            ],
                            annotations: [
                              defineField({
                                name: 'styledSpan',
                                type: 'object',
                                title: 'Styled Span',
                                fields: [
                                  { name: 'className', type: 'string', title: 'CSS Class for Span' },
                                  { name: 'id', type: 'string', title: 'Element ID (optional)' },
                                ],
                              }),
                            ],
                          },
                        },
                      ],
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
          name: 'affirmationItem',
          type: 'object',
          title: 'Afirmación',
          fields: [
            defineField({
              name: 'text',
              type: 'array',
              title: 'Texto de la Afirmación',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'Heading 1', value: 'h1' },
                    { title: 'Heading 2', value: 'h2' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Bold', value: 'strong' },
                      { title: 'Italic', value: 'em' },
                    ],
                    annotations: [
                      defineField({
                        name: 'styledSpan',
                        type: 'object',
                        title: 'Styled Span',
                        fields: [
                          { name: 'className', type: 'string', title: 'CSS Class for Span' },
                          { name: 'id', type: 'string', title: 'Element ID (optional)' },
                        ],
                      }),
                    ],
                  },
                },
              ],
            }),
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
            defineField({
              name: 'text',
              type: 'array',
              title: 'Texto del Disparador',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'Heading 1', value: 'h1' },
                    { title: 'Heading 2', value: 'h2' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Bold', value: 'strong' },
                      { title: 'Italic', value: 'em' },
                    ],
                    annotations: [
                      defineField({
                        name: 'styledSpan',
                        type: 'object',
                        title: 'Styled Span',
                        fields: [
                          { name: 'className', type: 'string', title: 'CSS Class for Span' },
                          { name: 'id', type: 'string', title: 'Element ID (optional)' },
                        ],
                      }),
                    ],
                  },
                },
              ],
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
          name: 'activityItem',
          type: 'object',
          title: 'Actividad',
          fields: [
            { name: 'title', type: 'string', title: 'Título de la Actividad' },
            defineField({
              name: 'description',
              type: 'array',
              title: 'Descripción',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'Heading 1', value: 'h1' },
                    { title: 'Heading 2', value: 'h2' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Bold', value: 'strong' },
                      { title: 'Italic', value: 'em' },
                    ],
                    annotations: [
                      defineField({
                        name: 'styledSpan',
                        type: 'object',
                        title: 'Styled Span',
                        fields: [
                          { name: 'className', type: 'string', title: 'CSS Class for Span' },
                          { name: 'id', type: 'string', title: 'Element ID (optional)' },
                        ],
                      }),
                    ],
                  },
                },
              ],
            }),
            defineField({
              name: 'media',
              type: 'array',
              title: 'Archivos Asociados',
              of: [{ type: 'url' }],
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
          name: 'meditationItem',
          type: 'object',
          title: 'Meditación Guiada',
          fields: [
            { name: 'title', type: 'string', title: 'Título de la Meditación' },
            defineField({
              name: 'description',
              type: 'array',
              title: 'Descripción',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'Heading 1', value: 'h1' },
                    { title: 'Heading 2', value: 'h2' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Bold', value: 'strong' },
                      { title: 'Italic', value: 'em' },
                    ],
                    annotations: [
                      defineField({
                        name: 'styledSpan',
                        type: 'object',
                        title: 'Styled Span',
                        fields: [
                          { name: 'className', type: 'string', title: 'CSS Class for Span' },
                          { name: 'id', type: 'string', title: 'Element ID (optional)' },
                        ],
                      }),
                    ],
                  },
                },
              ],
            }),
            defineField({
              name: 'media',
              type: 'array',
              title: 'Archivos Asociados',
              of: [{ type: 'url' }],
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
          name: 'dailyMeditationItem',
          type: 'object',
          title: 'Meditación Cotidiana',
          fields: [
            { name: 'title', type: 'string', title: 'Título de la Meditación' },
            defineField({
              name: 'description',
              type: 'array',
              title: 'Descripción',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'Heading 1', value: 'h1' },
                    { title: 'Heading 2', value: 'h2' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Bold', value: 'strong' },
                      { title: 'Italic', value: 'em' },
                    ],
                    annotations: [
                      defineField({
                        name: 'styledSpan',
                        type: 'object',
                        title: 'Styled Span',
                        fields: [
                          { name: 'className', type: 'string', title: 'CSS Class for Span' },
                          { name: 'id', type: 'string', title: 'Element ID (optional)' },
                        ],
                      }),
                    ],
                  },
                },
              ],
            }),
            defineField({
              name: 'media',
              type: 'array',
              title: 'Archivos Asociados',
              of: [{ type: 'url' }],
            }),
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
            { name: 'title', type: 'string', title: 'Título de la Práctica' },
            defineField({
              name: 'description',
              type: 'array',
              title: 'Descripción',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'Heading 1', value: 'h1' },
                    { title: 'Heading 2', value: 'h2' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Bold', value: 'strong' },
                      { title: 'Italic', value: 'em' },
                    ],
                    annotations: [
                      defineField({
                        name: 'styledSpan',
                        type: 'object',
                        title: 'Styled Span',
                        fields: [
                          { name: 'className', type: 'string', title: 'CSS Class for Span' },
                          { name: 'id', type: 'string', title: 'Element ID (optional)' },
                        ],
                      }),
                    ],
                  },
                },
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'chatGPTPrompts',
      type: 'array',
      title: 'chatGPTPrompts',
      of: [
        defineField({
          name: 'promptItem',
          type: 'object',
          title: 'Prompt para ChatGPT',
          fields: [
            defineField({
              name: 'text',
              type: 'array',
              title: 'Prompt para chat gpt',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'Heading 1', value: 'h1' },
                    { title: 'Heading 2', value: 'h2' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Bold', value: 'strong' },
                      { title: 'Italic', value: 'em' },
                    ],
                    annotations: [
                      defineField({
                        name: 'styledSpan',
                        type: 'object',
                        title: 'Styled Span',
                        fields: [
                          { name: 'className', type: 'string', title: 'CSS Class for Span' },
                          { name: 'id', type: 'string', title: 'Element ID (optional)' },
                        ],
                      }),
                    ],
                  },
                },
              ],
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
          of: [defineField({ name: 'imageUrl', type: 'string' })],
        }),
        defineField({
          name: 'videos',
          type: 'array',
          title: 'Videos',
          of: [defineField({ name: 'videoUrl', type: 'string' })],
        }),
        defineField({
          name: 'audios',
          type: 'array',
          title: 'Audios',
          of: [defineField({ name: 'audioUrl', type: 'string' })],
        }),
        defineField({
          name: 'links',
          type: 'array',
          title: 'Enlaces Externos',
          of: [defineField({ name: 'linkUrl', type: 'string' })],
        }),
        defineField({
          name: 'spotifyPlaylists',
          type: 'array',
          title: 'Playlists de Spotify',
          of: [defineField({ name: 'spotifyPlaylistUrl', type: 'string' })],
        }),
      ],
    }),
  ],
})
