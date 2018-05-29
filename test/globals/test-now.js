const nunjucks = require('nunjucks');
const chai = require('chai');
const helpers = require('../../index');

const expect = chai.expect;

describe('#now filter', function() {
  let env;

  before(function() {
    env = nunjucks.configure('test/globals', { autoescape: false });
    env.addGlobal('now', helpers.globals.now);
  });

  it('should exist in the nunjucks environment', function() {
    expect(env.getGlobal('now')).to.be.a('function');
  });

  it('should return the full year', function() {
    const tplString = '{{ now("Y") }}';
    const result = nunjucks.renderString(tplString);
    const expected = `${new Date().getFullYear()}`;
    expect(expected).to.equal(result);
  });
});
