const nunjucks = require('nunjucks');
const chai = require('chai');
const extensions = require('../../index');

const CacheExtension = extensions.Cache;
const expect = chai.expect;

describe('#cache block tag', function() {
  let env;

  before(function() {
    env = new nunjucks.Environment();
    env.addExtension('cache', new CacheExtension());
  });

  it('should exist in the nunjucks environment', function() {
    expect(env.hasExtension('cache')).to.be.true;
  });

});
