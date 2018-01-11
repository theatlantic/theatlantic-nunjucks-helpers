const CacheExtension = require('./lib/cache');
const WithExtension = require('./lib/with');

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
