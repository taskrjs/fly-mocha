const spawn = require('child_process').spawn
const args = [ './node_modules/tape/bin/tape', 'test/index.js' ]

if (process.version.match(/^v[0123]\./)) {
  Array.prototype.unshift.apply(args, [ '--harmony', '--harmony_arrow_functions' ])
}

spawn(process.execPath, args, { stdio: 'inherit' })
