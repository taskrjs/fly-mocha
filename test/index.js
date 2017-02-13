const join = require("path").join
const test = require("tape")
const Fly = require("fly")

const dir = join(__dirname, "spec")

test("fly-mocha", function (t) {
  t.plan(5)

  const fly = new Fly({
    plugins: [require("../")],
    tasks: {
      * foo(f) {
        f.emit = (str, obj) => {
          t.equal(str, "plugin_error", "emits `plugin_error` on errors")
          t.true(/1/.test(obj.error), "emits with # of errors")
        }
        yield f.source(`${dir}/pass.js`).mocha()
        t.pass("pass spec")
        yield f.source(`${dir}/fail.js`).mocha()
        t.pass("fail spec")
      }
    }
  })

  t.true("mocha" in fly.plugins, "attach mocha() to fly")

  fly.start("foo")
})
