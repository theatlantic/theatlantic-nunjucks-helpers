const nunjucks = require('nunjucks');
const chai = require('chai');
const helpers = require('../../index');

const expect = chai.expect;

describe('#djangoInclude filter', function() {
  let env;

  before(function() {
    env = nunjucks.configure('test/globals', { autoescape: false });
    env.addGlobal('django_include', helpers.globals.djangoInclude);
  });

  it('should exist in the nunjucks environment', function() {
    expect(env.getGlobal('django_include')).to.be.a('function');
  });

  it('should return an empty string (no-op)', function() {
    const tplString = '{{ django_include("components/gpt-ad.html", class="c-ad") }}';
    const result = nunjucks.renderString(tplString);
    const expected = '';
    expect(expected).to.equal(result);
  });
});
