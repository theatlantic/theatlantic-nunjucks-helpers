const nunjucks = require('nunjucks');

const chai = require('chai');
const helpers = require('../../index');

const RenderExtension = helpers.extensions.Render;
const expect = chai.expect;

const safe = nunjucks.runtime.markSafe;

describe('#render tag', function() {
  let env;

  before(function() {
    env = nunjucks.configure('test/extensions', { autoescape: false });
    env.addExtension('render', new RenderExtension('./test/extensions', 'templates'));
  });

  it('should exist in the nunjucks environment', function() {
    expect(env.hasExtension('render')).to.be.true;
  });

  it('should not error when compiling', function() {
    const tplString = '{% render "@component" %}';
    const result = nunjucks.compile(tplString);
    expect(result).to.be.an('object');
  });

  it('should render a template correctly', function() {
    const result = nunjucks.render('templates/render_block.html');
    const expected = '<h1></h1>';

    expect(result.trim()).to.equal(expected);
  });

  it('should render a template with a context correctly', function() {
    const context = { title: 'My Title' };
    const result = nunjucks.render('templates/render_block.html', context);
    const expected = '<h1>My Title</h1>';

    expect(result.trim()).to.equal(expected);
  });

  it('should render a root context correctly', function() {
    const rootContext = { title: 'My Title' };
    const result = nunjucks.renderString('{% render "@component" %}', rootContext);
    const expected = '<h1>My Title</h1>';

    expect(result.trim()).to.equal(expected);
  });

  it('should render a local context correctly', function() {
    const localContext = JSON.stringify({ title: 'My Title' });
    const result = nunjucks.renderString(`{% render "@component", ${localContext} %}`);
    const expected = '<h1>My Title</h1>';

    expect(result.trim()).to.equal(expected);
  });

  it('should override the root context with matching local context', function() {
    const rootContext = { title: 'My Title' };
    const localContext = JSON.stringify({ title: 'My New Title' });
    const renderString = `{% render "@component", ${localContext} %}`
    const result = nunjucks.renderString(renderString, rootContext);
    const expected = '<h1>My New Title</h1>';

    expect(result.trim()).to.equal(expected);
  });

  it('should not render root context when passed a local context', function() {
    const rootContext = { title: 'My Title' };
    const localContext = JSON.stringify({ body: 'Hello World' });
    const renderString = `{% render "@compound-component", ${localContext} %}`;
    const result = nunjucks.renderString(renderString, rootContext);
    const expected = '<h1></h1>\n<p>Hello World</p>';

    expect(result.trim()).to.equal(expected);
  });

  it('should merge root context and local context when `merged` is passed', function() {
    const rootContext = { title: 'My Title' };
    const localContext = JSON.stringify({ body: 'Hello World' });
    const renderString = `{% render "@compound-component", ${localContext}, true %}`;
    const result = nunjucks.renderString(renderString, rootContext);
    const expected = '<h1>My Title</h1>\n<p>Hello World</p>';

    expect(result.trim()).to.equal(expected);
  });

  it('should override and merge root context and local context when `merged` is passed', function() {
    const rootContext = { title: 'My Title' };
    const localContext = JSON.stringify({ title: 'My New Title', body: 'Hello World' });
    const renderString = `{% render "@compound-component", ${localContext}, true %}`;
    const result = nunjucks.renderString(renderString, rootContext);
    const expected = '<h1>My New Title</h1>\n<p>Hello World</p>';

    expect(result.trim()).to.equal(expected);
  });
});
