const nunjucks = require('nunjucks');
const chai = require('chai');
const helpers = require('../../index');

const expect = chai.expect;

describe('#responsiveEmbeds filter', function() {
  let env;

  before(function() {
    env = nunjucks.configure('test/globals', { autoescape: false });
    env.addGlobal('responsive_embeds', helpers.globals.responsiveEmbeds);
  });

  it('should exist in the nunjucks environment', function() {
    expect(env.getGlobal('responsive_embeds')).to.be.a('function');
  });

  it('should return the original string (no-op)', function() {
    const embedString = '<iframe frameborder=\'no\' height=\'200\' scrolling=\'no\' src=\'https://player.megaphone.fm/ATL4841133987?\' width=\'100%\'></iframe>';
    const tplString = `{{ responsive_embeds("${embedString}") }}`;
    const result = nunjucks.renderString(tplString);
    const expected = embedString;
    expect(expected).to.equal(result);
  });
});
