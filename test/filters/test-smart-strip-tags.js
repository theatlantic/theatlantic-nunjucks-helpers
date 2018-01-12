const nunjucks = require('nunjucks');
const chai = require('chai');
const helpers = require('../../index');

const expect = chai.expect;

describe('#smartStripTags filter', function() {
  let env;

  before(function() {
    env = nunjucks.configure('test/filters', { autoescape: false });
    env.addFilter('smart_strip_tags', helpers.filters.smartStripTags);
  });

  it('should exist in the nunjucks environment', function() {
    expect(env.getFilter('smart_strip_tags')).to.be.a('function');
  });

  it('should just pass the string through (no-op)', function() {
    const props = { title: '<em>Breaking Bad</em> critics are just haters' };
    const result = nunjucks.renderString('{{ title|smart_strip_tags }}', props);
    expect(result).to.equal(props.title);
  });
});
