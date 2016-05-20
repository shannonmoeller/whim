[![whim](https://cdn.rawgit.com/shannonmoeller/whim/5350f9c/logo.svg)](https://github.com/shannonmoeller/whim#readme)

[![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url] [![Tip][amazon-img]][amazon-url]

A protean toolkit based on my mercurial preferences.

## Install

    $ npm install --global whim
    $ npm install --save-dev whim

## Usage

    whim <command> [options]

    Commands

      i, init   Boilerplate generator.
      l, lint   Code linter.
      t, test   Code tester.

    Options

      -h, --help      Display this help.
      -v, --version   Display version number.

## API

### test

```js
import { test } from 'whim';

test('should do something', async t => {
    t.pass();
});
```

## Contribute

Standards for this project, including tests, code coverage, and semantics are enforced with a build tool. Pull requests must include passing tests with 100% code coverage and no linting errors.

### Test

    $ npm test

----

© Shannon Moeller <me@shannonmoeller.com> (http://shannonmoeller.com)

Licensed under [MIT](http://shannonmoeller.com/mit.txt)

[amazon-img]:    https://img.shields.io/badge/amazon-tip_jar-yellow.svg?style=flat-square
[amazon-url]:    https://www.amazon.com/gp/registry/wishlist/1VQM9ID04YPC5?sort=universal-price
[downloads-img]: http://img.shields.io/npm/dm/whim.svg?style=flat-square
[npm-img]:       http://img.shields.io/npm/v/whim.svg?style=flat-square
[npm-url]:       https://npmjs.org/package/whim
