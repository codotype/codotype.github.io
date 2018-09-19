# Blueprint

In Codotype, a **Blueprint** encapsulates a high-level abstract representation of an application's data models and their respective attributes and associations. This document will break down the structure of a Blueprint so engine creators can grasp the concepts that enable their endeavors


#### Blueprint Label & Identifier

The core meta data for each Blueprint is described by the structure below:

```
{
  id: 1,
  label: 'Book Store',
  identifier: 'book_store',
  schemas: [ ... ],
  seed_data: [ ... ]
}
```

> TODO - Blueprint should have class name as well, add GitHub issue

> TODO - Blueprint `schemas` should be renamed to `models`
