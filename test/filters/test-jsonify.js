const nunjucks = require('nunjucks');
const chai = require('chai');
const helpers = require('../../index');

const expect = chai.expect;

describe('#jsonfiy filter', function() {
  let env;

  before(function() {
    env = nunjucks.configure('test/filters');
    env.addFilter('jsonify', helpers.filters.jsonify);
  });

  it('should exist in the nunjucks environment', function() {
    expect(env.getFilter('jsonify')).to.be.a('function');
  });

  it('should correctly convert to a valid JSON object', function() {
    const props = {
      article: {
        title: 'The Case Against Unit Testing',
        authors: ['David Frum', 'Rob Meyer']
      }
    };
    const tplString = '{{ article|jsonify|safe }}';
    const rendered = nunjucks.renderString(tplString, props);
    const result = JSON.parse(rendered);
    expect(result).to.be.an('object');
  });
});
