var angularify = require('./lib/angularify');

module.exports = angularify;

if (require.main === module) {
  process.stdin
    .pipe(angularify())
    .pipe(process.stdout);
}
