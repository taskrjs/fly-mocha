const Mocha = require("mocha")

module.exports = function () {
  this.mocha = function (opts) {
    const mocha = new Mocha(opts)
    return new Promise(function (resolve, reject) {
      this.unwrap().then((files) => {
        files.forEach(_ => mocha.addFile(_.file))
        mocha.run((failures) => failures > 0
          ? reject(failures + " error(s).")
          : resolve())
      })
    }.bind(this))
  }
}
