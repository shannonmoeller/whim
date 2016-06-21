# `<%= slug %>`

[![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url] [![Build Status][travis-img]][travis-url] [![Coverage Status][coveralls-img]][coveralls-url] [![Tip][amazon-img]][amazon-url]

TODO: Description.

## Install

    $ npm install --save <%= slug %>

## Usage

```js
var <%= slug.replace(/-([^-])/g, function(m, a) { return a.toUpperCase() }) %> = require('<%= slug %>');
```

## API

### <%= slug.replace(/-([^-])/g, function(m, a) { return a.toUpperCase() }) %>()

TODO: Description.

### .method([arg]): Type

- `arg` `Type` (default: `value`) Description.

TODO: Description.

## Contribute

Standards for this project, including tests, code coverage, and semantics are enforced with a build tool. Pull requests must include passing tests with 100% code coverage and no linting errors.

### Test

    $ npm test

----

© <%= authorName %> <<%= authorEmail %>> (<%= authorUrl %>)

Licensed under [MIT](<%= authorUrl %>/mit.txt)

[amazon-img]:    https://img.shields.io/badge/tip-jar-yellow.svg?style=flat-square
[amazon-url]:    https://www.amazon.com/gp/registry/wishlist/1VQM9ID04YPC5?sort=universal-price
[coveralls-img]: http://img.shields.io/coveralls/shannonmoeller/<%= slug %>/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/shannonmoeller/<%= slug %>
[downloads-img]: http://img.shields.io/npm/dm/<%= slug %>.svg?style=flat-square
[npm-img]:       http://img.shields.io/npm/v/<%= slug %>.svg?style=flat-square
[npm-url]:       https://npmjs.org/package/<%= slug %>
[travis-img]:    http://img.shields.io/travis/shannonmoeller/<%= slug %>.svg?style=flat-square
[travis-url]:    https://travis-ci.org/shannonmoeller/<%= slug %>
