const nunjucks = require('nunjucks');
const chai = require('chai');
const helpers = require('../../index');

const expect = chai.expect;

describe('#static filter', function() {
  let env;

  before(function() {
    env = nunjucks.configure('test/globals', { autoescape: false });
    env.addGlobal('static', helpers.globals.staticGlobal);
  });

  it('should exist in the nunjucks environment', function() {
    expect(env.getGlobal('static')).to.be.a('function');
  });

  it('should return an empty string (no-op)', function() {
    const tplString = '{{ static("dist/styles.css") }}';
    const result = nunjucks.renderString(tplString);
    const expected = '';
    expect(expected).to.equal(result);
  });
});
