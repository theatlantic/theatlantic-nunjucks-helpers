module.exports = {
  extends: 'airbnb-base',
  env: {
    node: true
  },
  rules: {
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  }
};
