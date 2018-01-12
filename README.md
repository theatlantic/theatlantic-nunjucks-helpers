# Nunjucks Helpers for the Atlantic

This is a collection of [Nunjucks](https://github.com/mozilla/nunjucks/) extensions, globals, and filters for use in _the Atlantic's_ codebase.

## Usage

The helpers are all attached to the default export object. Use as many or as little as you need.

```javascript
const Nunjucks = require('nunjucks');
const helpers = require('theatlantic-nunjucks-helpers');

const env = new Nunjucks.Environment();

env.addExtension('with', new helpers.extensions.With());
env.addFilter('jsonify', helpers.filters.jsonify);
env.addGlobal('critical_css', helpers.globals.critical_css);
```

## Includes

Here are the current helpers included with this package:

### Extensions

**NOTE:** These are all just no-op'ed right now to appease linters and compilers :cry:

* `with` - Creates a scoped context block
* `cache` - Cache contents at compile time

### Filters

* `jsonify`
* `smart_strip_tags`

### Globals

* `django_include`
* `critical_css`
