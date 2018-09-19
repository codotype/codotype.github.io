# Blueprint Models

This document describes the structure of an individual Blueprint model.


#### Model Metadata

The core meta data for each model is described by the structure below:

```
{
  id: '1',
  label: 'Book Type',
  label_plural: 'Book Types',
  identifier: 'book_type',
  identifier_plural: 'book_types',
  class_name: 'BookType',
  class_name_plural: 'BookTypes',
  attributes: [ ... ],
  relations: [ ... ]
}
```

#### `label`
The `label` property is the human-readable, singular noun that describes the data model. The `label` and `label_plural` properties are primarily used when generating user interfaces that are intuitive for end-users.

#### `identifier`
The `identifier` property is the code-friendly, lowercase, underscored, singular noun that describes the data model. The `identifier` and `identifier_plural` properties are primarily used when generating code that conforms to developer expectations.

#### `class_name`
The `class_name` property is the code-friendly, title-cased, white-space free, singular noun that describes the data model. The `class_name` and `class_name_plural` properties are primarily used when generating class definitions that conform to developer expectations.
