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
 * @param  {String} env           An instance of nunjucks.Environment
 * @param  {String} componentDir  The components template subdirectory
 * @param  {String} ext           The file extension
 *
 * @return {Object} An object type for the extension; use with 'new' operator
 */

module.exports = class RenderExtension {
  constructor(env, componentDir, ext = '.html') {
    this.env = env;
    this.componentDir = componentDir;
    this.ext = ext;
    this.tags = ['render'];
  }

  parse(parser, nodes) {
    const tok = parser.nextToken();
    const args = parser.parseSignature(null, true);

    parser.advanceAfterBlockEnd(tok.value);

    return new nodes.CallExtension(this, 'run', args);
  }
  run(node, name, ctx, merge) {
    const tmplName = name.replace(/^@/, '');
    const rootContext = node.ctx;
    let context = ctx || rootContext;

    if (merge) {
      context = { ...rootContext, ...context };
    }

    return this.env.render(`${this.componentDir}/${tmplName}${this.ext}`, context);
  }
};
