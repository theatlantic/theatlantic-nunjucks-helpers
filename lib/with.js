/**
 * A 'with' extension for scoping variables to a block
 *
 * @example
 *  {% with thumbs = author.headshot.thumbs %}
 *    <img src="{{ thumbs['200'].url }}" alt="Photo of author">
 *  {% endwith %}
 *
 * @see https://mozilla.github.io/nunjucks/api.html#custom-tags
 * @return {Object} An object type for the extension; use with 'new' operator
 */
module.exports = () => {
  /**
   * The tag name(s) that the extension handles
   * @type {Array}
   */
  this.tags = ['with'];

  /**
   * When we hit the tag names defined in this.tags, this `parse` function
   * takes over parsing of the AST at compile time
   */
  this.parse = (parser, nodes) => {
    const tok = parser.nextToken();

    const args = parser.parseSignature(null, true);
    parser.advanceAfterBlockEnd(tok.value);

    const body = parser.parseUntilBlocks('endwith');
    parser.advanceAfterBlockEnd();

    return new nodes.CallExtension(this, 'run', args, [body]);
  };

  /**
   * The callback function to run on the content between 'with' and 'endwith'
   * tags in the template.
   */
  this.run = (context, body) => body();
};
