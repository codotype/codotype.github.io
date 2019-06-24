# Schemas

This document describes the structure of an individual **Schema**.


## Metadata

The core meta data for each Schema is described by the structure below:

```
{
  id: "1",
  label: "Book Type",
  label_plural: "Book Types",
  identifier: "book_type",
  identifier_plural: "book_types",
  class_name: "BookType",
  class_name_plural: "BookTypes",
  camel_case: "bookType",
  camel_case_plural: "bookTypes",
  attributes: Attribute[],
  relations: Relation[]
}
```

#### `label`
The `label` property is the human-readable, singular noun that describes the Schema. The `label` and `label_plural` properties are primarily used when generating user interfaces that are intuitive for end-users.

#### `identifier`
The `identifier` property is the code-friendly, lowercase, underscored, singular noun that describes the Schema. The `identifier` and `identifier_plural` properties are primarily used when generating code that conforms to developer expectations.

#### `class_name`
The `class_name` property is the code-friendly, title-cased, white-space free, singular noun that describes the Schema. The `class_name` and `class_name_plural` properties are primarily used when generating class definitions that conform to developer expectations.

#### `camel_case`
The `camel_case` property is the code-friendly, camel-cased, white-space free, singular noun that describes the Schema. The `camel_case` and `class_name_plural` properties are primarily used when generating instance variables that conform to developer expectations.

#### `attributes`
The `attributes` property is an array of nested [Attribute](/blueprint/attribute) instances.

#### `relations`
The `relations` property is an array of nested [Relation](/blueprint/relation) instances.
