const nunjucks = require('nunjucks');
const chai = require('chai');
const helpers = require('../../index');

const expect = chai.expect;

describe('#jsonDump', function() {
  let env;

  before(function() {
    env = nunjucks.configure('test/globals', { autoescape: false });
    env.addGlobal('json_dump', helpers.globals.jsonDump);
  });

  it('should exist in the nunjucks environment', function() {
    expect(env.getGlobal('json_dump')).to.be.a('function');
  });

  it('should correctly convert to a valid JSON object', function() {
    const props = {
      article: {
        title: 'The Case Against Unit Testing',
        authors: ['David Frum', 'Rob Meyer']
      }
    };
    const tplString = '{{ json_dump(article) }}';
    const rendered = nunjucks.renderString(tplString, props);
    const result = JSON.parse(rendered);
    expect(result).to.be.an('object');
  });
});
