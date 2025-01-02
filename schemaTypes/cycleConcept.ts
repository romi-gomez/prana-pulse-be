export default {
  name: 'cycleConcept',
  type: 'document',
  title: 'Cycle Concept',
  fields: [
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
      name: 'title',
      type: 'string',
      title: 'Título del Concepto',
      description: 'Ejemplo: Conexión con la Tierra - Presencia Fundamental',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Identificador único generado a partir del ciclo y el título.',
      options: {
        source: (doc) => `${doc.cycle ? doc.cycle.name : ''}-${doc.title}`,
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
      type: 'array',
      title: 'Descripción General',
      description: 'Texto introductorio del concepto.',
      of: [{ type: 'block' }],
    },
    {
      name: 'keyAspects',
      type: 'array',
      title: 'Aspectos Clave',
      of: [
        {
          type: 'object',
          title: 'Aspecto Clave',
          fields: [
            { name: 'title', type: 'string', title: 'Título del Aspecto' },
            { name: 'description', type: 'array', title: 'Descripción', of: [{ type: 'block' }] },
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
          name: 'title',
          type: 'string',
          title: 'Título de la Sección',
          description: 'Ejemplo: Inseguridad y Desarraigo',
        },
        {
          name: 'introduction',
          type: 'array',
          title: 'Introducción',
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
                { name: 'description', type: 'array', title: 'Descripción', of: [{ type: 'block' }] },
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
          description: 'Ejemplo: El Camino Hacia la Estabilidad',
        },
        {
          name: 'description',
          type: 'array',
          title: 'Descripción Breve',
          of: [{ type: 'block' }],
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
            { name: 'from', type: 'array', title: 'De Dónde Partimos', of: [{ type: 'block' }] },
            { name: 'to', type: 'array', title: 'Hacia Dónde Vamos', of: [{ type: 'block' }] },
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
          description: 'Ejemplo: Transformación y Armonía',
        },
        {
          name: 'description',
          type: 'array',
          title: 'Descripción',
          of: [{ type: 'block' }],
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
              of: [{ type: 'block' }],
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
                    {
                      name: 'title',
                      type: 'string',
                      title: 'Título de la Invitación',
                      description: 'Ejemplo: "Conéctate con la Naturaleza"',
                    },
                    {
                      name: 'description',
                      type: 'array',
                      title: 'Descripción de la Invitación',
                      of: [{ type: 'block' }],
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
            { name: 'text', type: 'string', title: 'Texto de la Afirmación' },
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
            { name: 'description', type: 'array', title: 'Descripción', of: [{ type: 'block' }] },
            { name: 'media', type: 'array', title: 'Archivos Asociados', of: [{ type: 'url' }] },
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
            { name: 'description', type: 'array', title: 'Descripción', of: [{ type: 'block' }] },
            { name: 'media', type: 'array', title: 'Archivos Asociados', of: [{ type: 'url' }] },
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
            { name: 'description', type: 'array', title: 'Descripción', of: [{ type: 'block' }] },
            { name: 'media', type: 'array', title: 'Archivos Asociados', of: [{ type: 'url' }] },
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
