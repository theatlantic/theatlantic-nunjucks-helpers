# Nunjucks Extensions for the Atlantic

This is a collection of [Nunjucks](https://github.com/mozilla/nunjucks/) extensions for use in _the Atlantic's_ codebase.

## Example Usage

The extensions are all attached to default export object. Use as many or as little as you need.

```javascript
const Nunjucks = require('nunjucks');
const extensions = require('theatlantic-nunjucks-extensions');

const env = new Nunjucks.Environment();

env.addExtension('cache', new extensions.Cache());
env.addExtension('with', new extensions.With());
```

## Included Extensions

Here are the current extensions included with this package:

* **[With](https://github.com/theatlantic/nunjucks-extensions/tree/master/lib/with)** - Creates a scoped context block
* **[Cache](https://github.com/theatlantic/nunjucks-extensions/tree/master/lib/cache)** - Cache contents at compile time
