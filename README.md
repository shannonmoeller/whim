[![whim](https://cdn.rawgit.com/shannonmoeller/whim/27a17fd/media/logo.svg)](https://github.com/shannonmoeller/whim#readme)

[![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url] [![Tip][tip-img]][tip-url]

A protean toolkit based on my mercurial preferences. Read the code for details.

## Install

    $ npm install --global whim
    $ npm install --save-dev whim

## Usage

```
  whim [options]

  Options

    -h, --help       Display this help.
    -v, --version    Display version number.

  ───

  whim <task> [subtask] [options]

  Tasks

    init             Code generator.
    ├─ module
    └─ website

    lint             Code linter.
    ├─ all (default)
    ├─ css
    └─ js

    make             Code builder.
    ├─ all (default)
    ├─ clean
    ├─ css
    ├─ html
    ├─ js
    ├─ server
    ├─ statics
    └─ svg

    test             Code tester.
    ├─ all (default)
    ├─ browser
    ├─ node
    └─ report

  Options

    -h, --help       Display task help.
    -v, --verbose    Display runtime info.
```

## API

### register

Registers Babel as a require hook with intelligent presets.

```js
require('whim/register');
```

### test

Testing API.

```js
import test from 'whim/test';

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

[tip-img]:    https://img.shields.io/badge/tip-jar-yellow.svg?style=flat-square
[tip-url]:    https://www.amazon.com/gp/registry/wishlist/1VQM9ID04YPC5?sort=universal-price
[downloads-img]: http://img.shields.io/npm/dm/whim.svg?style=flat-square
[npm-img]:       http://img.shields.io/npm/v/whim.svg?style=flat-square
[npm-url]:       https://npmjs.org/package/whim
