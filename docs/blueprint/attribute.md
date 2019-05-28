# Attributes

Attributes define the static properties that can be assigned to a class.

## Structure

The core meta data for each attribute is described by the structure below:

```
{
  id: 1,
  order: 0,
  label: 'Title',
  identifier: 'title',
  help: 'The title of the Book',
  required: true,
  unique: false,
  datatype: 'STRING',
  datatypeOptions: {}
}
```

## Datatypes

The datatype describes the type of data encaptulated in an individual attribue. A list of Codotype supported datatypes is as follows:

- `STRING`
- `STRING_ARRAY`
- `NUMBER`
- `INTEGER`
- `FLOAT`
- `BOOLEAN`
- `DATE`
- `JSON`

All of the Codotype datatypes are defined in the [@codotype/types](http://github.com/codotype/codotype) package.

> TODO - `datatype_options` here
