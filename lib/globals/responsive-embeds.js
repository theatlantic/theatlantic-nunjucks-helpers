/**
 * A 'responsive_embeds' global. Exists solely to no-op.
 *
 * @example
 *  {{ responsiveEmbeds('<iframe frameborder="no" height="200" scrolling="no" src="https://player.megaphone.fm/ATL4841133987?" width="100%"></iframe>') }}
 *
 * @see https://mozilla.github.io/nunjucks/api.html#addglobal
 *
 * @param  {String} html The HTML to make responsive
 * @return {String}      An empty string; noop
 */
module.exports = function responsiveEmbeds(html) {
  return html;
};
