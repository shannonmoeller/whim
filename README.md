[![whim](https://cdn.rawgit.com/shannonmoeller/whim/27a17fd/media/logo.svg)](https://github.com/shannonmoeller/whim#readme)

[![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url] [![Tip][amazon-img]][amazon-url]

A protean toolkit based on my mercurial preferences. Read the code for details.

## Install

    $ npm install --global whim
    $ npm install --save-dev whim

## Usage

```
  whim <task> [subtask] [options]

  Tasks

    init               Code generator.
    ├─ module
    └─ website

    lint               Code linter.
    ├─ all (default)
    ├─ css
    └─ js

    make               Code builder.
    ├─ all (default)
    ├─ clean
    ├─ css
    ├─ html
    ├─ js
    ├─ server
    ├─ statics
    └─ svg

    test               Code tester.
    ├─ all (default)
    ├─ browser
    ├─ node
    └─ report

  Options

    -h, --help         Display task help.
    -v, --verbose      Display runtime info.
```

### Recommended Usage

The recommended way to use `whim` is to set a specific version number and invoke `whim` via `npm run`. By using an exact version number for a locally installed copy of `whim` you ensure that its constantly-changing nature doesn't bite you. Using a global install will very likely not work long term.

```js
// package.json
{
  ...

  "devDependencies": {
    "whim": "4.0.0"
  },
  "scripts": {
    "start": "whim make",
    "pretest": "whim lint",
    "test": "whim test",
    "report": "whim test report"
  },

  ...
}
```

Then:

    $ npm start server -- -mv
    # runs `whim make server -mv`

    $ npm test
    # runs `whim lint && whim test`

    $ npm run report
    # runs `whim test report`

## API

### test

Testing API.

```js
import test from 'whim/lib/test';

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
