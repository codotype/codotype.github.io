# Attributes

Attributes define the static properties that can be assigned to a class.

#### Structure

The core meta data for each attribute is described by the structure below:

```
{
  id: 1,
  order: 0,
  label: 'Title',
  identifier: 'title',
  help: '',
  required: true,
  unique: false,
  datatype: 'STRING',
  datatypeOptions: {}
}
```

#### Datatypes

The datatype describes the type of data encaptulated in an individual attribue. A list of Codotype supported datatypes is as follows:

- `STRING`
- `STRING_ARRAY`
- `NUMBER`
- `INTEGER`
- `FLOAT`
- `DOUBLE`
- `BOOLEAN`
- `DATE`
- `TIME`
- `DATETIME`
- `JSON`

All of the Codotype datatypes are defined in the `@codotype/types` package.

> TODO - `datatype_options` here
