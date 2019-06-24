# Attributes

Attributes define the static properties that can be assigned to a class.



## Example

The core meta data for each attribute is described by the structure below:

```
{
  id: 1,
  order: 0,
  label: "Title",
  identifier: "title",
  help: "The title of the Book",
  required: true,
  unique: false,
  datatype: "STRING",
  datatypeOptions: {}
}
```



## Properties

Each property of an **Attribute** is described below:

#### `id`
The `id` property is a unique ID for the Attribute.

#### `order`
The `order` property is an integer that describes order of each Attribute object inside its parent Schema.

#### `label`
The `label` property is the human-readable string that describes the Attribute. The `label` property is used for things like form labels and other user-facing code.

#### `identifier`
The `identifier` property is the code-friendly, lowercase, underscored string that describes the Attribute. The `identifier` property is used for things like naming the database table column associated with an Attribute.

#### `help`
The `help` property is the a human-readable string that describes the _purpose_ of the Attribute. The `help` property is used for things like help tooltips that can help contextualize user input. The `help` property is optional.

#### `required`
The `required` property is a boolean that describes whether or not a value is required for this Attribute. The default value is `false`.

#### `unique`
The `unqieu` property is a boolean that describes whether or the values collected for this Attribute must be unique. Helpful to setting unique constraints at the database level. The default value is `false`.

#### `datatype`
The `datatype` property is a string that describes the _type of data_ modeled by the Attribute. See below for more details about the `datatype` property.

#### `datatypeOptions`
The `datatypeOptions` property deprecated and will be removed in a later release!



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

> TODO - Document compatibility matrix between different databases
