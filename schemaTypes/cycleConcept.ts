export default {
  name: 'cycleConcept',
  type: 'document',
  title: 'Cycle Concept',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título del Concepto',
      description: 'Ejemplo: Conexión con la Tierra - Presencia Fundamental',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Este campo actúa como identificador único.',
      options: {
        source: 'title', // Generado automáticamente desde el nombre
        maxLength: 96,
      },
    },
    {
      name: 'keyConcept',
      type: 'string',
      title: 'Concepto Clave',
      description: 'Ejemplo: Estabilidad y Arraigo',
    },
    {
      name: 'description',
      type: 'object',
      title: 'Descripción del Concepto',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional sobre el concepto.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Detalles del Concepto',
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      name: 'keyAspects',
      type: 'object',
      title: 'Aspectos Clave del Concepto',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para los aspectos clave.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Aspectos Clave',
          of: [
            {
              type: 'object',
              title: 'Aspecto Clave',
              fields: [
                { name: 'title', type: 'string', title: 'Título del Aspecto' },
                { name: 'description', type: 'array', title: 'Descripción del Aspecto', of: [{ type: 'block' }] },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'startingPoint',
      type: 'object',
      title: 'De Dónde Partimos',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para el punto de partida.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Desafíos',
          of: [
            {
              type: 'object',
              title: 'Desafío',
              fields: [
                { name: 'area', type: 'string', title: 'Área (Ej. Emocionalmente, Físicamente)' },
                { name: 'challenge', type: 'array', title: 'Descripción del Desafío', of: [{ type: 'block' }] },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'pathToBalance',
      type: 'object',
      title: 'El Camino Hacia la Estabilidad',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional sobre el camino hacia la estabilidad.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Detalles del Camino',
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      name: 'objectives',
      type: 'object',
      title: 'Objetivos del Viaje',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para los objetivos.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Objetivos',
          of: [
            {
              type: 'object',
              title: 'Objetivo',
              fields: [
                { name: 'title', type: 'string', title: 'Título del Objetivo' },
                { name: 'from', type: 'array', title: 'De Dónde Partimos', of: [{ type: 'block' }] },
                { name: 'to', type: 'array', title: 'Hacia Dónde Vamos', of: [{ type: 'block' }] },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'transformation',
      type: 'object',
      title: 'Transformación y Armonía',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional sobre la transformación.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Detalles de Transformación',
          of: [{ type: 'block' }],
        },
      ],
    },
    {
      name: 'oracleMessage',
      type: 'object',
      title: 'Mensaje del Oráculo',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para el mensaje del oráculo.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Mensajes',
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
          description: 'Texto introductorio opcional para las invitaciones.',
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
                { name: 'content', type: 'array', title: 'Descripción de la Invitación', of: [{ type: 'block' }] },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'affirmation',
      type: 'object',
      title: 'Afirmaciones',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para las afirmaciones.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Afirmaciones',
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
      ],
    },
    {
      name: 'activities',
      type: 'object',
      title: 'Propuesta de Actividad',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para las actividades.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Actividades',
          of: [
            {
              type: 'object',
              title: 'Actividad',
              fields: [
                { name: 'title', type: 'string', title: 'Título de la Actividad' },
                { name: 'instructions', type: 'array', title: 'Instrucciones', of: [{ type: 'block' }] },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'guidedMeditations',
      type: 'object',
      title: 'Meditaciones Guiadas',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para las meditaciones guiadas.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Meditaciones',
          of: [
            {
              type: 'object',
              title: 'Meditación Guiada',
              fields: [
                { name: 'title', type: 'string', title: 'Título de la Meditación' },
                { name: 'instructions', type: 'array', title: 'Instrucciones', of: [{ type: 'block' }] },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'dailyMeditation',
      type: 'object',
      title: 'Meditaciones Cotidianas',
      fields: [
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
          description: 'Texto introductorio opcional para las meditaciones diarias.',
          of: [{ type: 'block' }],
        },
        {
          name: 'items',
          type: 'array',
          title: 'Lista de Meditaciones Diarias',
          of: [
            {
              type: 'object',
              title: 'Meditación',
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Título de la Meditación',
                  description: 'Ejemplo: Meditación de Conexión a Tierra',
                },
                {
                  name: 'description',
                  type: 'array',
                  title: 'Descripción de la Meditación',
                  description: 'Instrucciones detalladas o beneficios de la meditación.',
                  of: [{ type: 'block' }],
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
