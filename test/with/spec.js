const nunjucks = require('nunjucks');
const chai = require('chai');
const extensions = require('../../index');

const WithExtension = extensions.With;
const expect = chai.expect;

describe('#with block tag', function() {
  let env;

  before(function() {
    env = new nunjucks.Environment();
    env.addExtension('with', new WithExtension());
  });

  it('should exist in the nunjucks environment', function() {
    expect(env.hasExtension('with')).to.be.true;
  });

});
