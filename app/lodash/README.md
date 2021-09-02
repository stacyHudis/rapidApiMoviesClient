# lodash v4.17.21

The [Lodash](https://lodash.com/) library exported as [Node.js](https://nodejs.org/) modules.

## Installation

Using npm:
```shell
$ npm i -g npm
$ npm i --save lodash
```

In Node.js:
```js
// Load the full build.
var _ = require('./lodash');
// Load the core build.
var _ = require('./core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('./fp');

// Load method categories.
var array = require('./array');
var object = require('./object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('./at');
var curryN = require('./curryN');
```

See the [package source](https://github.com/lodash/lodash/tree/4.17.21-npm) for more details.

**Note:**<br>
Install [n_](https://www.npmjs.com/package/n_) for Lodash use in the Node.js < 6 REPL.

## Support

Tested in Chrome 74-75, Firefox 66-67, IE 11, Edge 18, Safari 11-12, & Node.js 8-12.<br>
Automated [browser](https://saucelabs.com/u/lodash) & [CI](https://travis-ci.org/lodash/lodash/) test runs are available.
