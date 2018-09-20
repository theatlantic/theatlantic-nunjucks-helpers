const { readFileSync } = require('fs');
const { join, normalize, format } = require('path');

const { renderString } = require('nunjucks');

/**
 * A 'render' extension for rendering components in Fractal
 *
 * @example
 *  {% render "@button" %}
 *
 * @example
 *  {% render "@button", { "modifier_class": "btn-small" } %}
 *
 * @example
 *  {% render "@button", { "modifier_class": "btn-small" }, true %}
 *
 * @see https://mozilla.github.io/nunjucks/api.html#custom-tags
 * @see https://github.com/frctl/nunjucks#render
 *
 * @param  {String} path  The path to templates
 * @param  {String} dir   The templates directory
 * @param  {String} ext   The file extension
 *
 * @return {Object} An object type for the extension; use with 'new' operator
 */

module.exports = function RenderExtension(path, dir, ext = '.html') {
  this.tags = ['render'];
  this.parse = function (parser, nodes) {
    const tok = parser.nextToken();
    const args = parser.parseSignature(null, true);

    parser.advanceAfterBlockEnd(tok.value);

    return new nodes.CallExtensionAsync(this, 'run', args);
  };

  this.run = function () {
    const args = [...arguments];
    const rootContext = args[0].ctx;
    const callback = args.pop();

    args.shift();

    const name = args[0].replace('@', '');
    let context = args[1] || rootContext;
    const merge = args[2] || false;

    if (merge) {
      context = { ...rootContext, ...context };
    }

    const tmpl = normalize(format({ dir, name, ext }));
    const template = readFileSync(join(path, tmpl), 'utf-8');
    callback(null, renderString(template, context));
  }
}
