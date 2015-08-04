const test = require("tape").test
const join = require("path").join
const bind = require("fly-util").bind
const state = {
  pass: {
    msg: "pass spec",
    spec: [join("test", "spec", "pass.js")]
  },
  fail: {
    msg: "fail spec",
    spec: [join("test", "spec", "fail.js")]
  }
}
const unwrap = function (f) { f(this.spec) }

test("fly-mocha", function (t) {
  t.plan(3)

  const fly = {}
  require(bind("../")).call(fly)

  t.ok(fly.mocha !== undefined, "inject mocha in fly instance")

  fly.unwrap = unwrap.bind(state.pass)
  fly.mocha()
    .then(() => t.ok(true, state.pass.msg))
    .catch(() => t.ok(false, state.pass.msg))

  fly.unwrap = unwrap.bind(state.fail)
  fly.mocha()
    .then(() => t.ok(false, state.fail.msg))
    .catch(() => t.ok(true, state.fail.msg))
})
