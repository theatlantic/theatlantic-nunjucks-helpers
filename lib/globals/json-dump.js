/**
 * A 'json_dump' global. Outputs a JSON string of passed data
 *
 * @example
 *  {{ json_dump(article.thumbs) }}
 *
 * @see https://mozilla.github.io/nunjucks/api.html#addglobal
 *
 * @return {String}     A valid JSON string
 */
module.exports = function jsonDump(context) {
  return JSON.stringify(context, null, 2);
};
