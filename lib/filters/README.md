# Filters

Fair warning: some of these are currently **no-op'ed**, so they don't actually work. We use them to pass linting and compiling without errors. Currently, they are not used in any templates which are rendered by nunjucks; just python/jinja2.

## Usage

Nunjucks expects a [custom filter](https://mozilla.github.io/nunjucks/api.html#custom-filters) to return a function that accepts one or more paramters: the target object and any parameters passed to the filter.

```javascript
const Nunjucks = require('nunjucks');
const helpers = require('theatlantic-nunjucks-helpers');

const env = new Nunjucks.Environment();

env.addFilter('jsonify', new helpers.filters.jsonify);
env.addFilter('smart_strip_tags', new helpers.filters.smartStripTags);
```

## Includes

The following filters are included in this library:

### jsonify

This filter will accept an object and output a valid JSON string representation of the object.

Use it like this in a template:

```nunjucks
{{ article.authors|jsonify }}
```

### smartStripTags

This tag will (one day) strips tags safely without accidentally introducing double encoding. Currently, it is **no-op'ed**.

Use it like this in a template:

```nunjucks
{{ article.title|smart_strip_tags }}
```
