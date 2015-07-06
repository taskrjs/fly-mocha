<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8430194/35c6043a-1f6a-11e5-8cbd-af6cc86baa84.png">
  </a>
</div>

> [Mocha](http://mochajs.org/) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

## Usage
> Check out the [documentation](https://github.com/mochajs/mocha/wiki/Using-mocha-programmatically#set-options) to see the available options.

### Install

```a
npm install -D fly-mocha
```

### Example

```js
export function* test () {
  yield this
    .source("spec/*Spec.js")
    .mocha({ reporter: "nyan" })
}
```

# License

[MIT][mit] © [Jorge Bucaran][author] et [al][contributors]


[mit]:          http://opensource.org/licenses/MIT
[author]:       http://about.bucaran.me
[contributors]: https://github.com/bucaran/fly-mocha/graphs/contributors
[releases]:     https://github.com/bucaran/fly-mocha/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-mocha
[npm-ver-link]: https://img.shields.io/npm/v/fly-mocha.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-mocha.svg?style=flat-square
[travis-link]:  https://travis-ci.org/bucaran/fly-mocha
[travis-badge]: http://img.shields.io/travis/bucaran/fly-mocha.svg?style=flat-square
