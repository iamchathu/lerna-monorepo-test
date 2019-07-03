module.exports = {
  linters: {
    '**/+(src|test)/**/*.ts': ['prettier --write', 'eslint --fix', 'git add'],
  },
};
