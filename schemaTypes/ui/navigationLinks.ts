export default {
    name: 'navigationLinks',
    title: 'Navigation Links',
    type: 'document',
    fields: [
      {
        name: 'page',
        title: 'Page Name',
        type: 'string', 
      },
      {
        name: 'links',
        title: 'Navigation Links',
        type: 'array',
        of: [{ type: 'object', fields: [
          { name: 'en', title: 'English Text', type: 'string' },
          { name: 'es', title: 'Spanish Text', type: 'string' },
          { name: 'url', title: 'URL', type: 'string' },
        ]}],
      },
    ],
  };