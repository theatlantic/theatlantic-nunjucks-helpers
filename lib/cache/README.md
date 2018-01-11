# {% cache %} tag

This tag will (supposedly) cache the contents of the block at compile time and return them at runtime.

## Usage

Add the extension to your nunjucks environment:

```javascript
const nunjucks = require('nunjucks');
const extensions = require('theatlantic-nunjucks-extensions');

const env = new nunjucks.Environment();
const CacheExtension = extensions.Cache;

env.addExtension('cache', new CacheExtension());
```

Use it like this in a template:

```nunjucks
{% cache %}
<nav>
  <ul>
    {% for item in navItems %}
      <li><a href="{{ item.link }}">{{ item.title }}</a></li>
    {% endfor %}
  </ul>
</nav>
{% endcache %}
```
