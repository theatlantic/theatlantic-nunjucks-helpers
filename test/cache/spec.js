const nunjucks = require('nunjucks');
const chai = require('chai');
const extensions = require('../../index');

const CacheExtension = extensions.Cache;
const expect = chai.expect;

describe('#cache block tag', function() {
  let env;

  before(function() {
    nunjucks.installJinjaCompat();
    env = nunjucks.configure('test/cache');
    env.addExtension('cache', new CacheExtension());
  });

  it('should exist in the nunjucks environment', function() {
    expect(env.hasExtension('cache')).to.be.true;
  });

  it('should not error when compiling', function() {
    const tplString = '{% cache %}I required heavy DB operations.{% endcache %}';
    const result = nunjucks.compile(tplString);
    expect(result).to.be.an('object');
  });

  // This extension is currently just a no-op, so it doesn't actually render correctly!
  // @todo Rewrite this extension so that if we actually want to render it via javascript,
  //       it will work
  //
  // it('should render correctly', function() {
  //   const result = nunjucks.render('templates/cache_block.html');
  //   const expected = 'I required heavy DB operations.';
  //   expect(result).to.equal(expected);
  // });
});
