export default {
  name: 'oracleCard',
  type: 'document',
  title: 'Oracle Card',
  fields: [
    {
      name: 'title',
      type: 'object',
      title: 'Título Localizado',
      fields: [
        { name: 'es', type: 'string', title: 'Título (Español)' },  // Spanish first
        { name: 'en', type: 'string', title: 'Título (Inglés)' }    // English second
      ]
    },
    {
      name: 'tipoOraculo',
      type: 'string',
      title: 'Tipo de Oráculo',
      options: {
        list: [
          { title: 'Animal', value: 'animal' },
          { title: 'Tarot', value: 'tarot' }
        ]
      }
    },
    {
      name: 'ciclo',
      type: 'string',
      title: 'Ciclo o Chakra Asociado',
      description: 'Ciclo o chakra relacionado con esta carta (opcional)'
    },
    {
      name: 'actividades',
      type: 'array',
      title: 'Actividades',
      of: [
        {
          type: 'object',
          title: 'Actividad',
          fields: [
            {
              name: 'titulo',
              type: 'object',
              title: 'Título Localizado de la Actividad',
              fields: [
                { name: 'es', type: 'string', title: 'Título (Español)' },  // Spanish first
                { name: 'en', type: 'string', title: 'Título (Inglés)' }    // English second
              ]
            },
            {
              name: 'archivoMarkdown',
              type: 'file',
              title: 'Archivo Markdown de la Actividad',
              description: 'Sube un archivo Markdown (.md) que contenga el contenido formateado de la actividad'
            },
            {
              name: 'audio',
              type: 'file',
              title: 'Audio (opcional)',
              description: 'Archivo de audio opcional para acompañar la actividad (si es necesario)'
            },
            {
              name: 'video',
              type: 'url',
              title: 'Video (opcional)',
              description: 'Enlace de video opcional que puede acompañar la actividad'
            }
          ]
        }
      ]
    },
    {
      name: 'imagenesCarta',
      type: 'array',
      title: 'Imágenes de la Carta',
      of: [
        {
          type: 'object',
          title: 'Imagen URL',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'URL de la Imagen'
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Texto Alternativo'
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Leyenda'
            },
            {
              name: 'credit',
              type: 'string',
              title: 'Créditos'
            }
          ]
        }
      ]
    }
  ]
};
