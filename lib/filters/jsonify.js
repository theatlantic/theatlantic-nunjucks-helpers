/**
 * A 'jsonify' filter for converting a given object to a JSON object
 *
 * @example
 *  {{ article.authors|jsonify }}
 *
 * @see https://mozilla.github.io/nunjucks/api.html#custom-filters
 *
 * @param {Object}  obj The object to turn into JSON (data to the left of the |)
 * @return {Object}     The JSON object
 */
module.exports = function jsonify(obj) {
  return JSON.stringify(obj);
};
