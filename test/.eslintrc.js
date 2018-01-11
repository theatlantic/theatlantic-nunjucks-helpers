module.exports = {
  extends: 'eslint:recommended',
  env: {
    node: true,
    mocha: true
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false
      }
    ]
  }
};
