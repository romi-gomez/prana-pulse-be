# Sanity Schema Improvements Roadmap

## Phase 1: Refactor to use defineType/defineField (Completed)
- [x] Refactor cycleGeneral.ts to use defineType/defineField
- [x] Refactor cycleConcept.ts to use defineType/defineField
- [x] Refactor animalOracle.ts to use defineType/defineField
- [x] Refactor tarotOracle.ts to use defineType/defineField
- [x] Refactor pageSection.ts to use defineType/defineField
- [x] Refactor salesPageSection.ts to use defineType/defineField
- [x] Refactor globalContent.ts to use defineType/defineField
- [x] Refactor navigationLinks.ts to use defineType/defineField
- [x] Refactor comingSoonSection.ts to use defineType/defineField

## Phase 2: Schema Enhancements

### Add Descriptions
- [ ] Add detailed descriptions to all document types
- [ ] Add helpful descriptions to fields to guide content editors
- [ ] Use JSX in descriptions for more complex formatting (collapsible details)

### Add Validation
- [ ] Implement validation rules for required fields
- [ ] Add string pattern validation where appropriate
- [ ] Add min/max length validation for text fields
- [ ] Add number range validation where appropriate
- [ ] Implement custom validation functions for complex rules
- [ ] Add custom error messages to validation rules
- [ ] Use warning level validation for editorial standards
- [ ] Implement info level validation for additional context

### Conditional Fields
- [ ] Hide slug field until name is filled
- [ ] Implement conditional display logic for related fields
- [ ] Show/hide sections based on selection in other fields
- [ ] Use the hidden attribute with functions for dynamic visibility

### Organize Content with Groups/Tabs
- [ ] Group related fields into logical sections
- [ ] Implement tabs for better organization of complex documents
- [ ] Create field groups for better content editing experience
- [ ] Use fieldsets to visually arrange related fields
- [ ] Implement columns for side-by-side field display
- [ ] Use collapsible fieldsets for optional or advanced sections

### Improve Visual Experience
- [ ] Add icons for document types
- [ ] Implement custom previews for documents
- [ ] Use prepare() to format preview data
- [ ] Add custom input components where appropriate
- [ ] Ensure proper title casing for field titles (e.g., URL instead of Url)

### Media Handling
- [ ] Ensure consistent handling of media URLs across all schemas
- [ ] Implement proper validation for URL fields

## Phase 3: Advanced Sanity Features

### Custom Components
- [ ] Implement custom UI components using @sanity/ui
- [ ] Create reusable field components for common patterns
- [ ] Develop custom input components for specialized data entry

### Document Structure Customization
- [ ] Customize document structure in sanity config
- [ ] Create Structure folder with Structure resolver
- [ ] Implement custom structure with conditional filtering
- [ ] Set up document views with sanity-plugin-documents-pane
- [ ] Configure DefaultDocumentNode.ts
- [ ] Create customized lists and document view panes
- [ ] Implement Structure Builder API

## Phase 4: Next.js Integration and TypeScript Support

### Next.js Integration
- [ ] Configure next-sanity and @sanity/image-url
- [ ] Set up proper project structure with side-by-side folders
- [ ] Create Sanity client configuration
- [ ] Implement live.ts file for loading live content

### TypeScript Support
- [ ] Extract schema with `npx sanity@latest schema extract`
- [ ] Set up type generation with sanity-typegen.json
- [ ] Generate types with `npx sanity@latest typegen generate`
- [ ] Implement Sanity TypeGen for automatic type generation
- [ ] Create TypeScript types for Sanity Content Lake documents
- [ ] Generate TypeScript types for GROQ query results
- [ ] Set up automatic type generation in the build process
- [ ] Use generated types in front-end components for type safety
- [ ] Create type-safe GROQ query builders

## Phase 5: Deployment and Optimization
- [ ] Deploy Sanity Studio with `sanity deploy`
- [ ] Optimize performance for large datasets
- [ ] Implement caching strategies
- [ ] Set up proper CORS and security settings

## Implementation Notes

### defineType/defineField Pattern
```typescript
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'documentName',
  type: 'document',
  title: 'Document Title',
  description: 'Detailed description of the document purpose',
  icon: () => '📄', // Custom icon
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'metadata', title: 'Metadata' },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the document',
      validation: Rule => Rule.required().min(5).max(100),
      group: 'content'
    }),
    // Other fields...
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image'
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled',
        subtitle: subtitle || '',
        media: media || '📄'
      }
    }
  }
})
```

### Conditional Fields Example
```typescript
defineField({
  name: 'slug',
  type: 'slug',
  title: 'Slug',
  description: 'URL-friendly identifier',
  options: {
    source: 'title',
    maxLength: 96,
  },
  hidden: ({ document }) => !document?.title
})
```

### Validation Examples
```typescript
// Required field
validation: Rule => Rule.required()

// String length
validation: Rule => Rule.min(10).max(80)

// Custom message
validation: Rule => Rule.required().error('This field is required for SEO')

// Custom validation
validation: Rule => Rule.custom((value, context) => {
  if (context.document?.someOtherField && !value) {
    return 'This field is required when someOtherField is present'
  }
  return true
})
```

### Structure Builder Example
```typescript
// /structure/index.ts
import { StructureBuilder } from 'sanity/desk'

export const structure = (S: StructureBuilder) => 
  S.list()
    .title('Content')
    .items([
      // Regular document list items
      S.listItem()
        .title('Cycles')
        .icon(() => '🔄')
        .child(
          S.documentList()
            .title('All Cycles')
            .filter('_type == "cycle"')
        ),
      
      // Custom structure with filtered views
      S.listItem()
        .title('Content Categories')
        .icon(() => '📂')
        .child(
          S.list()
            .title('Content by Category')
            .items([
              S.listItem()
                .title('Category A')
                .child(
                  S.documentList()
                    .title('Category A Content')
                    .filter('_type == "content" && category == "A"')
                ),
              S.listItem()
                .title('Category B')
                .child(
                  S.documentList()
                    .title('Category B Content')
                    .filter('_type == "content" && category == "B"')
                )
            ])
        )
    ])
```

### Custom Document Views Example
```typescript
// /structure/defaultDocumentNode.ts
import { DefaultDocumentNodeResolver } from 'sanity/desk'
import { DocumentsPane } from 'sanity-plugin-documents-pane'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
  // For cycle documents, add a custom view showing related content
  if (schemaType === 'cycle') {
    return S.document().views([
      // Default form view
      S.view.form(),
      
      // Custom view showing related content
      S.view
        .component(DocumentsPane)
        .options({
          title: 'Related Content',
          query: `*[_type == "content" && references($id)]`,
          params: { id: `_id` }
        })
    ])
  }
  
  // Default for all other document types
  return S.document().views([S.view.form()])
}
