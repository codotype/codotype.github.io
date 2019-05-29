# Relations

**Relations** are responsible for modeling associations between two Schemas.



## Example

The core meta data for each **Relation** is described by the example below:


```
{
  id: 1,
  order: 0,
  type: RELATION_TYPE_BELONGS_TO,
  required: false,
  schema_id: '',
  related_schema_id: '',
  as: '',
  reverse_as: ''
}
```

## Properties

Each property of a **Relation** is described below:

#### `id`
The `id` property is a unique ID for the Relation.

#### `order`
The `order` property is an integer that describes order of each Relation object inside its parent Schema.

#### `type`
The `type` property is a string that describes the cardinality of the Relation. See below for more details about the `type` property.

#### `schema_id`
The `schema_id` property is a reference to the `id` property on the Schema to which the Relation is assigned.

#### `related_schema_id`
The `related_schema_id` property is a reference to the `id` property on the Schema referenced by the Relation.

#### `as`
The `as` property is an alternative `label` attribute for the Schema referenced by `related_schema_id`. This is helpful for situations where Schema A contains more than one relation to Schema B. The `as` property enables Codotype to intelligently name properties and methods that properly contextualize the nature of the Relation.

#### `reverse_as`
The `reverse_as` property is an alternative `label` attribute for the Schema to which the Relation belongs, used by the Schema referenced by `related_schema_id`. This is helpful for situations where [Incoming Relations]() are used to generate code that describes the inverse of this Relation.



## Relation Types

Codotype supports several primitive **Relation Types** out of the box.

### Has One

> TODO - document relation types here

### Belongs To

> TODO - document relation types here

### Has Many

> TODO - document relation types here



## Incoming Relations

> TODO - document relation types here
