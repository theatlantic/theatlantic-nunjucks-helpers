/**
 * A 'static' global. Exists solely to no-op.
 *
 * @example
 *  {{ static('dist/article.css') }}
 *
 * @see https://mozilla.github.io/nunjucks/api.html#addglobal
 *
 * @return {String}     An empty string; noop
 */
module.exports = function staticGlobal() {
  return '';
};
