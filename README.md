<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [Mocha](http://mochajs.org/) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][npm-pkg-link]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][david-badge]][david-link]
[![][david-dev-badge]][david-dev-link]
[![][mit-badge]][mit]

## Usage
> Check out the [documentation](https://github.com/mochajs/mocha/wiki/Using-mocha-programmatically#set-options) to see the available options.

### Install

```a
npm install -D fly-mocha
```

### Example

```js
module.exports = {
  *test(fly) {
    yield fly
      .source("spec/*Spec.js")
      .mocha({ reporter: "nyan" })
  },
}
```

# License

[MIT][mit] © [Jorge Bucaran][author] et [al][contributors]


[mit]:          http://opensource.org/licenses/MIT
[author]:       http://about.bucaran.me
[contributors]: https://github.com/bucaran/fly-mocha/graphs/contributors
[releases]:     https://github.com/bucaran/fly-mocha/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square&maxAge=2592000
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square&maxAge=2592000
[npm-pkg-link]: https://www.npmjs.org/package/fly-mocha
[npm-ver-link]: https://img.shields.io/npm/v/fly-mocha.svg?style=flat-square&maxAge=2592000
[dl-badge]:     http://img.shields.io/npm/dm/fly-mocha.svg?style=flat-square&maxAge=2592000
[travis-link]:  https://travis-ci.org/flyjs/fly-mocha
[travis-badge]: http://img.shields.io/travis/flyjs/fly-mocha.svg?style=flat-square&maxAge=2592000
[david-link]:      https://david-dm.org/flyjs/fly-mocha
[david-badge]:     https://img.shields.io/david/flyjs/fly-mocha.svg?style=flat-square&maxAge=2592000
[david-dev-link]:  https://david-dm.org/flyjs/fly-mocha?type=dev
[david-dev-badge]: https://img.shields.io/david/dev/flyjs/fly-mocha.svg?style=flat-square&maxAge=2592000
