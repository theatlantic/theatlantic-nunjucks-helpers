/**
 * A 'cache' extension for saving & outputting compiled HTML at runtime
 *
 * @example
 *  {% cache %}
 *    <ul>
 *      {% for item in big_list %}
 *        <li>{{ item }}</li>
 *      {% endfor %}
 *    </ul>
 *  {% endcache %}
 *
 * @see https://mozilla.github.io/nunjucks/api.html#custom-tags
 * @return {Object} An object type for the extension; use with 'new' operator
 */
module.exports = function CacheExtension() {
  /**
   * The tag name(s) that the extension handles
   * @type {Array}
   */
  this.tags = ['cache'];

  /**
   * When we hit the tag names defined in this.tags, this `parse` function
   * takes over parsing of the AST at compile time
   */
  this.parse = (parser, nodes) => {
    const tok = parser.nextToken();

    parser.parseExpression();
    parser.parseExpression();

    parser.advanceAfterBlockEnd(tok.value);
    const body = parser.parseUntilBlocks('endcache');
    parser.advanceAfterBlockEnd();

    const args = new nodes.NodeList();
    return new nodes.CallExtension(this, 'run', args, [body]);
  };

  /**
   * The callback function to run on the content between 'with' and 'endwith'
   * tags in the template.
   */
  this.run = (context, body) => body();
};
