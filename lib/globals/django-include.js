/**
 * A 'django_include' global. Exists solely to no-op.
 *
 * @example
 *  {{ django_include("advertising/gpt-ad.html", class="c-ad") }}
 *
 * @see https://mozilla.github.io/nunjucks/api.html#addglobal
 *
 * @return {String}     An empty string; noop
 */
module.exports = function djangoInclude() {
  return '';
};
