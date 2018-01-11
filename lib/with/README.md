# {% with %} tag

This tag will create a scoped block with which to apply given variables

## Usage

Add the extension to your nunjucks environment:

```javascript
const nunjucks = require('nunjucks');
const extensions = require('theatlantic-nunjucks-extensions');

const env = new nunjucks.Environment();
const WithExtension = extensions.With;

env.addExtension('with', new WithExtension());
```

Use it like this in a template:

```nunjucks
{% with headshot = author.headshot.thumbs['200'] %}
  <img src="{{ headshot.src }}" alt="Headshot of {{ author.name }}">
{% endwith %}
```
