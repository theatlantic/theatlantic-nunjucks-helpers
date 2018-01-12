/**
 * A 'smart_strip_tags' filter that currently just passes the string through.
 * Its true purpose, however, is to strips tags safely without accidentally
 * introducing double encoding.
 *
 * @example
 *  {{ article.title|smart_strip_tags }}
 *
 * @see https://mozilla.github.io/nunjucks/api.html#custom-filters
 *
 * @param {String}  str The string to strip tags on
 * @return {String}.    The same string
 */
module.exports = function smartStripTags(str) {
  return str;
};
