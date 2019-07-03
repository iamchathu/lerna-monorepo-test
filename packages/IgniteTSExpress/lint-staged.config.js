module.exports = {
  '**/+(src|test)/**/*.ts': ['prettier --write', 'eslint --fix', 'git add'],
};
