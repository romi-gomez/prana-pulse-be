export default {
  name: 'cycle',
  type: 'document',
  title: 'Cycle',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre del Ciclo',
      description: 'Nombre único del ciclo (ejemplo: Pulsar, Sintonizar, Amplificar).',
    },
    {
      name: 'chakra',
      type: 'string',
      title: 'Chakra Asociado',
      description: 'El chakra vinculado con este ciclo (opcional).',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Identificador único generado desde el nombre del ciclo.',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
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
              {
                name: 'styledSpan',
                type: 'object',
                title: 'Styled Span',
                fields: [
                  { name: 'className', type: 'string', title: 'CSS Class for Span' },
                  { name: 'id', type: 'string', title: 'Element ID (optional)' },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: 'stateOfEquilibrium',
      type: 'object',
      title: 'Estado de Equilibrio',
      fields: [
        {
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
                  {
                    name: 'styledSpan',
                    type: 'object',
                    title: 'Styled Span',
                    fields: [
                      { name: 'className', type: 'string', title: 'CSS Class for Span' },
                      { name: 'id', type: 'string', title: 'Element ID (optional)' },
                    ],
                  },
                ],
              },
            },
          ],
        },
        {
          name: 'categories',
          type: 'array',
          title: 'Categorías del Equilibrio',
          of: [
            {
              type: 'object',
              title: 'Categoría',
              fields: [
                { name: 'name', type: 'string', title: 'Nombre de la Categoría' },
                {
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
                          {
                            name: 'styledSpan',
                            type: 'object',
                            title: 'Styled Span',
                            fields: [
                              { name: 'className', type: 'string', title: 'CSS Class for Span' },
                              { name: 'id', type: 'string', title: 'Element ID (optional)' },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'instabilityAndImbalance',
      type: 'object',
      title: 'Inestabilidad y Desequilibrio',
      fields: [
        {
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
                  {
                    name: 'styledSpan',
                    type: 'object',
                    title: 'Styled Span',
                    fields: [
                      { name: 'className', type: 'string', title: 'CSS Class for Span' },
                      { name: 'id', type: 'string', title: 'Element ID (optional)' },
                    ],
                  },
                ],
              },
            },
          ],
        },
        {
          name: 'challenges',
          type: 'array',
          title: 'Desafíos',
          of: [
            {
              type: 'object',
              title: 'Desafío',
              fields: [
                { name: 'category', type: 'string', title: 'Categoría (Ej. Emocional, Mental)' },
                {
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
                          {
                            name: 'styledSpan',
                            type: 'object',
                            title: 'Styled Span',
                            fields: [
                              { name: 'className', type: 'string', title: 'CSS Class for Span' },
                              { name: 'id', type: 'string', title: 'Element ID (optional)' },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'excessEnergy',
      type: 'object',
      title: 'Exceso de Energía',
      fields: [
        {
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
                  {
                    name: 'styledSpan',
                    type: 'object',
                    title: 'Styled Span',
                    fields: [
                      { name: 'className', type: 'string', title: 'CSS Class for Span' },
                      { name: 'id', type: 'string', title: 'Element ID (optional)' },
                    ],
                  },
                ],
              },
            },
          ],
        },
        {
          name: 'categories',
          type: 'array',
          title: 'Categorías del Exceso',
          of: [
            {
              type: 'object',
              title: 'Categoría',
              fields: [
                { name: 'name', type: 'string', title: 'Nombre de la Categoría' },
                {
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
                          {
                            name: 'styledSpan',
                            type: 'object',
                            title: 'Styled Span',
                            fields: [
                              { name: 'className', type: 'string', title: 'CSS Class for Span' },
                              { name: 'id', type: 'string', title: 'Element ID (optional)' },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'pathToBalance',
      type: 'object',
      title: 'El Camino Hacia',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Título de la Sección',
          description: 'Ejemplo: El Camino Hacia la Estabilidad.',
        },
        {
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
                  {
                    name: 'styledSpan',
                    type: 'object',
                    title: 'Styled Span',
                    fields: [
                      { name: 'className', type: 'string', title: 'CSS Class for Span' },
                      { name: 'id', type: 'string', title: 'Element ID (optional)' },
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: 'objectives',
      type: 'array',
      title: 'Objetivos del Viaje',
      of: [
        {
          type: 'object',
          title: 'Objetivo',
          fields: [
            { name: 'title', type: 'string', title: 'Título del Objetivo' },
            {
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
                      {
                        name: 'styledSpan',
                        type: 'object',
                        title: 'Styled Span',
                        fields: [
                          { name: 'className', type: 'string', title: 'CSS Class for Span' },
                          { name: 'id', type: 'string', title: 'Element ID (optional)' },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
            {
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
                      {
                        name: 'styledSpan',
                        type: 'object',
                        title: 'Styled Span',
                        fields: [
                          { name: 'className', type: 'string', title: 'CSS Class for Span' },
                          { name: 'id', type: 'string', title: 'Element ID (optional)' },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'transformation',
      type: 'object',
      title: 'Transformación',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Título de la Sección',
          description: 'Ejemplo: Transformación y Luz Interior.',
        },
        {
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
                  {
                    name: 'styledSpan',
                    type: 'object',
                    title: 'Styled Span',
                    fields: [
                      { name: 'className', type: 'string', title: 'CSS Class for Span' },
                      { name: 'id', type: 'string', title: 'Element ID (optional)' },
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: 'oracleMessages',
      type: 'array',
      title: 'Mensajes del Oráculo',
      of: [
        {
          type: 'object',
          title: 'Mensaje del Oráculo',
          fields: [
            {
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
                      {
                        name: 'styledSpan',
                        type: 'object',
                        title: 'Styled Span',
                        fields: [
                          { name: 'className', type: 'string', title: 'CSS Class for Span' },
                          { name: 'id', type: 'string', title: 'Element ID (optional)' },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
            {
              name: 'invitations',
              type: 'array',
              title: 'Invitaciones del Oráculo',
              of: [
                {
                  type: 'object',
                  title: 'Invitación del Oráculo',
                  fields: [
                    { name: 'title', type: 'string', title: 'Título de la Invitación' },
                    {
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
                              {
                                name: 'styledSpan',
                                type: 'object',
                                title: 'Styled Span',
                                fields: [
                                  { name: 'className', type: 'string', title: 'CSS Class for Span' },
                                  { name: 'id', type: 'string', title: 'Element ID (optional)' },
                                ],
                              },
                            ],
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'affirmations',
      type: 'array',
      title: 'Afirmaciones',
      of: [
        {
          type: 'object',
          title: 'Afirmación',
          fields: [
            {
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
                      {
                        name: 'styledSpan',
                        type: 'object',
                        title: 'Styled Span',
                        fields: [
                          { name: 'className', type: 'string', title: 'CSS Class for Span' },
                          { name: 'id', type: 'string', title: 'Element ID (optional)' },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'activities',
      type: 'array',
      title: 'Propuesta de Actividades',
      of: [
        {
          type: 'object',
          title: 'Actividad',
          fields: [
            { name: 'title', type: 'string', title: 'Título de la Actividad' },
            {
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
                      {
                        name: 'styledSpan',
                        type: 'object',
                        title: 'Styled Span',
                        fields: [
                          { name: 'className', type: 'string', title: 'CSS Class for Span' },
                          { name: 'id', type: 'string', title: 'Element ID (optional)' },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
            {
              name: 'media',
              type: 'array',
              title: 'Archivos Asociados',
              of: [{ type: 'url' }],
            },
          ],
        },
      ],
    },
    {
      name: 'guidedMeditations',
      type: 'array',
      title: 'Meditaciones Guiadas',
      of: [
        {
          type: 'object',
          title: 'Meditación Guiada',
          fields: [
            { name: 'title', type: 'string', title: 'Título de la Meditación' },
            {
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
                      {
                        name: 'styledSpan',
                        type: 'object',
                        title: 'Styled Span',
                        fields: [
                          { name: 'className', type: 'string', title: 'CSS Class for Span' },
                          { name: 'id', type: 'string', title: 'Element ID (optional)' },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
            {
              name: 'media',
              type: 'array',
              title: 'Archivos Asociados',
              of: [{ type: 'url' }],
            },
          ],
        },
      ],
    },
    {
      name: 'dailyMeditations',
      type: 'array',
      title: 'Meditaciones Cotidianas',
      of: [
        {
          type: 'object',
          title: 'Meditación Cotidiana',
          fields: [
            { name: 'title', type: 'string', title: 'Título de la Meditación' },
            {
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
                      {
                        name: 'styledSpan',
                        type: 'object',
                        title: 'Styled Span',
                        fields: [
                          { name: 'className', type: 'string', title: 'CSS Class for Span' },
                          { name: 'id', type: 'string', title: 'Element ID (optional)' },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
            {
              name: 'media',
              type: 'array',
              title: 'Archivos Asociados',
              of: [{ type: 'url' }],
            },
          ],
        },
      ],
    },
    {
      name: 'practicesAndTools',
      type: 'array',
      title: 'Prácticas y Herramientas',
      of: [
        {
          type: 'object',
          title: 'Práctica o Herramienta',
          fields: [
            { name: 'title', type: 'string', title: 'Título de la Práctica' },
            {
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
                      {
                        name: 'styledSpan',
                        type: 'object',
                        title: 'Styled Span',
                        fields: [
                          { name: 'className', type: 'string', title: 'CSS Class for Span' },
                          { name: 'id', type: 'string', title: 'Element ID (optional)' },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'chatGPTPrompts',
      type: 'array',
      title: 'chatGPTPrompts',
      of: [
        {
          type: 'object',
          title: 'chatGPTPrompt',
          fields: [
            {
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
                      {
                        name: 'styledSpan',
                        type: 'object',
                        title: 'Styled Span',
                        fields: [
                          { name: 'className', type: 'string', title: 'CSS Class for Span' },
                          { name: 'id', type: 'string', title: 'Element ID (optional)' },
                        ],
                      },
                    ],
                  },
                },
              ],
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


