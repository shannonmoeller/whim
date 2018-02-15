# rollup-config-whim

[![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url]

A protean Rollup configuration based on my mercurial preferences.

## Install

```
$ npm install --save-dev rollup rollup-config-whim
```

## Usage

Module:

```js
// rollup.config.js
import { configureModule } from 'rollup-config-whim';

export default configureModule();
```

Web:

```js
// rollup.config.js
import { configureWeb } from 'rollup-config-whim';

export default {
  ...configureWeb()
  // optional overrides
};
```

Run:

```command
$ rollup -c
$ rollup -i src/client/js/index.js -o dist/client/js/index.js -c
$ NODE_ENV=test rollup "test/**/*.js" -c
```

----

<p align="center">
  <a href="https://github.com/shannonmoeller/whim#readme"><img src="https://cdn.rawgit.com/shannonmoeller/whim/27a17fd/media/logo.svg" alt="whim" width="480" /></a>
</p>

----

MIT © [Shannon Moeller](http://shannonmoeller.com)

[downloads-img]: http://img.shields.io/npm/dm/rollup-config-whim.svg?style=flat-square
[npm-img]:       http://img.shields.io/npm/v/rollup-config-whim.svg?style=flat-square
[npm-url]:       https://npmjs.org/package/rollup-config-whim
