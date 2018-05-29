/**
 * A 'now' global. Returns the current year.
 *
 * @example
 *  {{ now('Y') }}
 *
 * @see https://mozilla.github.io/nunjucks/api.html#addglobal
 *
 * @return {String}     The current year
 */
module.exports = function now() {
  return new Date().getFullYear();
};
