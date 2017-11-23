# vue-delay

[![npm](https://img.shields.io/npm/v/vue-delay.svg?style=flat-square)](https://www.npmjs.com/package/vue-delay)
![vue](https://img.shields.io/badge/vue-2.x-4fc08d.svg?colorA=2c3e50&style=flat-square)
[![](https://img.shields.io/badge/%24-donate-green.svg?style=flat-square)](https://github.com/QingWei-Li/donate)

> 🐌 Delay rendering component for Vue.js

## Installation

```shell
npm i vue-delay
```

## Usages

```javascript
import Vue from 'vue'
import Delay from 'vue-delay'

Vue.use(Delay)
// or
// new Vue({
//  components: { Delay }
// })
```

```html
<delay :wait="5000">
  <h1>Hi Guys!</h1>
</delay>
```

## Options

### wait

* Type: `Number`
* Default: `0`

Waiting timestamp

### from

* Type: `Number`
* Default: `Date.now()`

Start timestamp

## Slots

### loading

```html
<delay :wait="5000">
  <div slot="loading">Ahem...</div>
  <h1>Hi Guys!</h1>
</delay>
```

## License

MIT
