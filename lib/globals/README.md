# Globals

Fair warning: these are all currently **no-op'ed**, so they don't actually work. We use them to pass linting and compiling without errors. Currently, they are not used in any templates which are rendered by nunjucks; just python/jinja2.

## Usage

Nunjucks expects a [new global value](https://mozilla.github.io/nunjucks/api.html#addglobal) to just define a value, which can be a function, object, array, string, etc.

```javascript
const Nunjucks = require('nunjucks');
const helpers = require('theatlantic-nunjucks-helpers');

const env = new Nunjucks.Environment();

env.addGlobal('critical_css', new helpers.filters.criticalCss);
```

## Includes

The following globals are included in this library:

### djangoInclude

This is a function that returns an empty string (no-op). It will only be used on django-rendered templates.

### criticalCss

This is a function that returns an empty string (no-op). It's currently a python function that takes a CSS path and inlines it's contents in the template. It fixes paths for background images and such as well.
