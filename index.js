const format = require("path").format
const Mocha = require("mocha")

module.exports = {
  name: "mocha",
  every: false,
  * func(files, opts) {
    const mocha = new Mocha(opts)
    for (const file of files) {
      mocha.addFile( format(file) )
    }
    mocha.run(errors => {
      if (errors > 0) {
        return this.emit("plugin_error", {
          error: `${errors} error(s).`,
          plugin: "fly-mocha"
        })
      }
    })
  }
}
