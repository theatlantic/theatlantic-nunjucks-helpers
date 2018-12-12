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
/* eslint-disable no-param-reassign, no-var, prefer-template */

function RenderExtension(env, componentDir, ext) {
  if (typeof ext === 'undefined') {
    ext = '.html';
  }
  this.env = env;
  this.componentDir = componentDir;
  this.ext = ext;
  this.tags = ['render'];

  this.parse = function parse(parser, nodes) {
    var tok = parser.nextToken();
    var args = parser.parseSignature(null, true);

    parser.advanceAfterBlockEnd(tok.value);

    return new nodes.CallExtension(this, 'run', args);
  };

  this.run = function run(node, name, ctx, merge) {
    var tmplName = name.replace(/^@/, '');
    var rootContext = node.ctx;
    var context = ctx || rootContext;

    if (merge) {
      context = Object.assign({}, rootContext, context);
    }

    return this.env.render(this.componentDir + '/' + tmplName + this.ext, context);
  };
}

module.exports = RenderExtension;
