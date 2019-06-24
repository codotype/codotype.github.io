# Configuration Groups

Codotype Generators may optionally expose additional configuration parameters that can be adjusted by end-users before producing code. A brief (albeit, incomplete) overview of the structures and patterns are outlined here.

## Structure

A `ConfigurationGroup` encapsulates a sub-set of a Generator's opt-in configuration. A Generator can expose any number of `ConfigurationGroup` definitions in it's `codotype-generator.json` file. A single `ConfigurationGroup` type is defined as follows:


```
{
  id: "DEPLOYMENT_CONFIGURATION_GROUP",
  label: "Deployment",
  identifier: "deployment",
  description: "Configure the deployment options for your app",
  type: "CONFIGURATION_GROUP_TYPE_OPTION",
  scope: "CONFIGURATION_GROUP_SCOPE_GLOBAL",
  more_info_url: "",
  attributes: ConfigurationOption[]
}

```

The `ConfigurationOption` type is defined thusly:

```
{
  label: "Deploy with Netlify?",
  identifier: "netlify",
  datatype: DATAYPE_BOOLEAN,
  help: "Include configuration files to automatically deploy your app to Netlify",
  more_info_url: "https://docs.netlify.com/configuration",
  icon: {
    type: "ICON_TYPE_URL",
    value: "https://netlify.com/logo.png"
  }
}
```



## Properties

The following properties describe a single `ConfigurationGroup`:

#### `id`
The `id` property is a unique ID for the Attribute.

#### `label`
The `label` property...

#### `identifier`
The `identifier` property...

#### `description`
The `description` property...

#### `type`
The `type` property...

#### `scope`
The `scope` property...

#### `more_info_url`
The `more_info_url` property...

#### `description`
The `description` property...

#### `attributes`
The `attributes` property...



## Types


There are two different types of `ConfigurationGroups` - **Options** and **Addons**.


#### Options

The `OPTION` type defines a 1-dimensional key-value store that can be represented as either a single instance scoped globally, or one unique instanced scoped to each Model/Schema.


#### Addons

The `ADDON` type defines a 1-dimensional array of objects that can be represented as either a series of instances scoped globally, or one unique series of instances scoped to each Model/Schema.



## Scope

In addition to different `ConfigurationGroup` types, `ConfigurationGroups` also support a `scope` property, which can be set to either **Global** or **Schema**.

#### Global Scope

The **Global** scope refers to configuration that's intended to be used to dictate generator-wide behavior. There can only ever be _one_ value assigned to each attribute in a `ConfigurationGroup` whose scope is set to **Global**. Pairing this with the `Option` type is ideal scenarios like switching specific features on or off. Conversely, pairing it with the `Addon` type is ideal for scenarios where you want a user to be able to define multiple _instances_ of your configuration object, each encapsulating values foe each attribute in the `ConfigurationGroup`.

For example, the above `ConfigurationGroup` will produce the following configuration at runtime when the scope is set to `GLOBAL`:

```
{
  configuration: {
    deployment: {
      netlify: true
    }
  }
}
```

#### Schema Scope

Conversely, the above `ConfigurationGroup` will produce the following configuration when the scope is set to `SCHEMA`:

```
{
  configuration: {
    deployment: {
      movie: {
        netlify: true
      },
      director: {
        netlify: true
      }
    }
  }
}
```


The **Schema** scope refers to configuration that's intended to be used to dictate behavior specific to each **Schema**. This is ideal for things like choosing a unique icons or permissions for each Model.
