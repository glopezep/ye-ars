# ye-ars

> List a range of years from the current year or selected year.

## Install

```sh
npm install --save ye-ars
```

## Usage

```js
const years = require('ye-ars')

const options = {
  count: 3
}

const result = years(options) // -> [2018, 2019, 2020]
```

## API

### years(options: Object) -> Array
- `options` _(Object)_
  - `initialYear` _(Number)_ initial year to start counting
  - `count` _(Number)_ number of years to list