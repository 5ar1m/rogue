set -e # exit early if any commands fail

exec node src/main.js "$@"
