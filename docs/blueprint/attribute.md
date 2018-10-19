# Attributes

Attributes define the static properties that can be assigned to a class.

#### Structure

The core meta data for each attribute is described by the structure below:

```
{
  id: 1,
  label: 'Title',
  identifier: 'title',
  datatype: 'TEXT',
  datatype_options: {}
}
```

#### Datatypes

The datatype describes the type of data encaptulated in an individual attribue. A list of Codotype supported datatypes is below:

- `TEXT`
- `STRING_ARRAY`
- `NUMBER`
- `BOOL`
- `DATE`
- `TIME`
- `DATETIME`
- `JSON`

> TODO - document `datatype`, `datatype_options` here