# rollup-config-whim

[![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url]

A protean Rollup configuration based on my mercurial preferences.

## Install

```
$ npm install --save-dev rollup rollup-config-whim
```

## Usage

Use as your rollup configuration:

```command
rollup -c rollup-config-whim
NODE_ENV=test rollup -c rollup-config-whim
```

Or import and customize it:

```js
// rollup.config.js
import whim from 'rollup-config-whim';

export default {
  ...whim,
  // overrides
};
```

----

MIT © [Shannon Moeller](http://shannonmoeller.com)

[downloads-img]: http://img.shields.io/npm/dm/rollup-config-whim.svg?style=flat-square
[npm-img]:       http://img.shields.io/npm/v/rollup-config-whim.svg?style=flat-square
[npm-url]:       https://npmjs.org/package/rollup-config-whim
