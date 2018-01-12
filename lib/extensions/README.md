# Extensions

Fair warning: these are all currently **no-op'ed**, so they don't actually work. We use them to pass linting and compiling without errors. Currently, they are not used in any templates which are rendered by nunjucks; just python/jinja2.

## Usage

Nunjucks expects extensions to follow a specific object format. They are instantiated using the `new` keyword. We capitalize the function name to illustrate this convention.

```javascript
const Nunjucks = require('nunjucks');
const helpers = require('theatlantic-nunjucks-helpers');

const env = new Nunjucks.Environment();

env.addExtension('with', new helpers.extensions.With());
env.addExtension('cache', new helpers.extensions.Cache());
```

## Includes

The following extensions are included in this library:

### Cache

This tag will (one day) cache the contents of the block at compile time and return them at runtime.

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

### With

This tag will (one day) create a scoped block with which to apply given variables

Use it like this in a template:

```nunjucks
{% with headshot = author.headshot.thumbs['200'] %}
  <img src="{{ headshot.src }}" alt="Headshot of {{ author.name }}">
{% endwith %}
```
