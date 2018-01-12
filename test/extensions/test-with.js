const nunjucks = require('nunjucks');
const chai = require('chai');
const helpers = require('../../index');

const WithExtension = helpers.extensions.With;
const expect = chai.expect;

describe('#with block tag', function() {
  let env;

  before(function() {
    nunjucks.installJinjaCompat();
    env = nunjucks.configure('test/extensions');
    env.addExtension('with', new WithExtension());
  });

  it('should exist in the nunjucks environment', function() {
    expect(env.hasExtension('with')).to.be.true;
  });

  it('should not error when compiling', function() {
    const tplString = '{% with author = article.author %}{{ author }}{% endwith %}';
    const result = nunjucks.compile(tplString);
    expect(result).to.be.an('object');
  });

  // This extension is currently just a no-op, so it doesn't actually render correctly!
  // @todo Rewrite this extension so that if we actually want to render it via javascript,
  //       it will work
  //
  // it('should render correctly', function() {
  //   const props = {
  //     article: {
  //       author: 'David Frum'
  //     }
  //   };
  //   const result = nunjucks.render('templates/with_block.html', props);
  //   const expected = 'David Frum';
  //   expect(result).to.equal(expected);
  // });
});
