module.exports = {
  extends: ['@invisionag/ivx'],
  env: {
    jquery: true,
  },
  globals: {
    sinon: true,
    ga: true,
  },
  rules: {
    'import/no-named-as-default': [0],
    'react/forbid-prop-types': [0],
    'react/prop-types': [0],
    'react/require-default-props': [0],
  },
};
