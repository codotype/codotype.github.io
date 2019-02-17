# Generator Configuration

Codotype Generators may optionally expose additional configuration parameters that can be adjusted by end-users before producing code. A brief (albeit, incomplete) overview of the structures and patterns are outlined here.

# Option Groups

An `OptionGroup` encapsulates a sub-set of a generator's opt-in configuration. A generator can expose any number of `OptionGroup` definitions in it's `meta.json` file. A single `OptionGroup` type is defined as follows:


```
{
  "id": "DEPLOYMENT_OPTION_GROUP",
  "label": "Deployment",
  "identifier": "deployment",
  "description": "Configure the deployment options for your app",
  "type": "OPTION_GROUP_TYPE_GLOBAL_OPTION",
  "more_info_url": null,
  "attributes": [ ... ]
},

```

There are four types of `OptionGroups` - `GLOBAL_OPTION`, `MODEL_OPTION`, `GLOBAL_ADDON`, and `MODEL_ADDON` - each type is detailed below.

##### Notes on Scope

> The "Global" scope refers to configuration that's intended to be used to dictate generator-wide behavior. This is ideal for things like switching a specific feature on or off.

> The "Model" scope refers to configuration that's intended to be used to dictate behavior specific to each "Model" or "Schema". This is ideal for things like choosing a unique icons or permissions for each Model.

## Options

The `*_OPTION` type defines a 1-dimensional key-value store that can be represented as either a single instance scoped globally, or one unique instanced scoped to each Model/Schema.

## Addons

The `*_ADDON` type defines a 1-dimensional array of objects that can be represented as either a series of instances scoped globally, or one unique series of instances scoped to each Model/Schema.
