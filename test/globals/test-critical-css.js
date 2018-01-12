const nunjucks = require('nunjucks');
const chai = require('chai');
const helpers = require('../../index');

const expect = chai.expect;

describe('#criticalCss filter', function() {
  let env;

  before(function() {
    env = nunjucks.configure('test/globals', { autoescape: false });
    env.addGlobal('critical_css', helpers.globals.criticalCss);
  });

  it('should exist in the nunjucks environment', function() {
    expect(env.getGlobal('critical_css')).to.be.a('function');
  });

  it('should return an empty string (no-op)', function() {
    const tplString = '{{ critical_css("some/path/to/styles.css") }}';
    const result = nunjucks.renderString(tplString);
    const expected = '';
    expect(expected).to.equal(result);
  });
});
