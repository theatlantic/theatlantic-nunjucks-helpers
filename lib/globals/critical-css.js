/**
 * A 'critical_css' global. Exists solely to no-op.
 *
 * @example
 *  {{ critical_css('dist/article.css') }}
 *
 * @see https://mozilla.github.io/nunjucks/api.html#addglobal
 *
 * @return {String}     An empty string; noop
 */
module.exports = function criticalCss() {
  return '';
};
