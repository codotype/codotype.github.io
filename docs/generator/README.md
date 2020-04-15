# Generators

This is where we document the ins-and-outs of Codotype generators.

## Overview

A Codotype Generator is a package that plugs into the Codotype runtime and generates code.

TODO - need a much more detailed overview of what precisely a generator _is_.

## Templates

Brief template example:

```
class MovieReviewsController < ApplicationController

  # POST /movie_reviews
  def create
    @movieReview = MovieReview.new(params[:movie_review])
    @movieReview.save()
    redirect_to @movieReview
  end

end
```

How this looks as a Codotype template:

```
class <%= schema.tokens.plural.pascal %>Controller < ApplicationController

  # POST /<%= schema.tokens.plural.snake %>
  def create
    @<%= schema.tokens.singular.camel %> = <%= schema.tokens.singular.pascal %>.new(params[:<%= schema.tokens.singular.snake %>])
    @<%= schema.tokens.singular.camel %>.save()
    redirect_to @<%= schema.tokens.singular.camel %>
  end

end
```
