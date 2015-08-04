import Mocha from "mocha"

export default function () {
  this.mocha = function (opts) {
    const mocha = new Mocha(opts)
    return new Promise((resolve, reject) => {
      this.unwrap((files) => {
        files.forEach(f => mocha.addFile(f))
        mocha.run((failures) => failures > 0
          ? reject(failures + " error(s).") : resolve())
      })
    })
  }
}
