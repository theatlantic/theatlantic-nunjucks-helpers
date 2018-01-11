const CacheExtension = require('./lib/cache/extension');
const WithExtension = require('./lib/with/extension');

module.exports = {
  /**
   * The 'cache' extension
   * @type {Object}
   * @example
   *  const extensions = require('theatlantic-nunjucks-extensions');
   *  env.addExtension('cache', new extensions.Cache());
   */
  Cache: CacheExtension,

  /**
   * The 'with' extension
   * @type {Object}
   * @example
   *  const extensions = require('theatlantic-nunjucks-extensions');
   *  env.addExtension('with', new extensions.With());
   */
  With: WithExtension,
};
