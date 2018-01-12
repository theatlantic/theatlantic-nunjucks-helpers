/* eslint-disable global-require */
module.exports = {
  extensions: {
    /**
     * The 'cache' extension
     * @type {Object}
     * @example
     *  const helpers = require('theatlantic-nunjucks-helpers');
     *  env.addExtension('cache', new helpers.extensions.Cache());
     */
    Cache: require('./lib/extensions/cache'),

    /**
     * The 'with' extension
     * @type {Object}
     * @example
     *  const helpers = require('theatlantic-nunjucks-helpers');
     *  env.addExtension('with', new helpers.extensions.With());
     */
    With: require('./lib/extensions/with'),
  },
  filters: {
    /**
     * The 'jsonify' filter
     * @type {Function}
     */
    jsonify: require('./lib/filters/jsonify'),

    /**
     * The 'smart_strip_tags' filter
     * @type {Function}
     */
    smartStripTags: require('./lib/filters/smart-strip-tags'),
  },
  globals: {
    /**
     * The 'django_include' global - noop
     * @type {Function}
     */
    djangoInclude: require('./lib/globals/django-include'),
  },
};
