
# Countdown

[![Version](https://img.shields.io/npm/v/@dsabre/countdown?style=for-the-badge)](https://www.npmjs.com/package/@dsabre/deploy-ftp)
[![License: MIT](https://img.shields.io/npm/l/@dsabre/countdown?registry_uri=https%3A%2F%2Fregistry.npmjs.org&style=for-the-badge)](https://github.com/dsabre/deploy-ftp/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dw/@dsabre/countdown?style=for-the-badge)](https://www.npmjs.com/package/@dsabre/deploy-ftp)
[![GitHub issues](https://img.shields.io/github/issues-raw/dsabre/countdown?style=for-the-badge)](https://github.com/dsabre/deploy-ftp/issues)
[![Dependencies](https://img.shields.io/librariesio/release/npm/@dsabre/countdown?style=for-the-badge)](https://www.npmjs.com/package/@dsabre/deploy-ftp)

A fully customizable countdown javascript for your site.


## Usage/Examples

### Initialization

```javascript
import Countdown from '@dsabre/countdown';

(function() {
    new Countdown();
})();
```

### Usage

Declare an html element with `data-dscountdown` attribute, the value must be in the format: **m/d/Y H:i:s**

```html
<div data-dscountdown="12/31/2050 23:59:59"></div>
```

### Other attributes

Labels

```
data-labels='{"days":"days","hours":"hours","minutes":"minutes","seconds":"seconds"}'
```

Prefix

```
data-prefix="Timer!&nbsp;"
```

Suffix

```
data-suffix="&nbsp;to ending!"
```

Change separator (default `":"`)

```
data-separator="."
```

Custom container classes

```
data-countdownclasses="exampleClass1 exampleClass2 ... exampleClassN"
```

Custom values classes

```
data-valuesclasses="exampleClass1 exampleClass2 ... exampleClassN"
```

Custom labels classes

```
data-labelclasses="exampleClass1 exampleClass2 ... exampleClassN"
```

Custom separator classes

```
data-separatorclasses="exampleClass1 exampleClass2 ... exampleClassN"
```

### Full example

```html
<div
    data-dscountdown="12/31/2050 23:59:59"
    data-countdownclasses="bg-green"
    data-valuesclasses="bg-blue"
    data-labelclasses="bg-light"
    data-separatorclasses="bg-red"
    data-labels='{"days":"days","hours":"hours","minutes":"minutes","seconds":"seconds"}'
    data-prefix="Countdown to <b>12/31/2050 23:59:59</b> (full config):&nbsp;"
    data-suffix="&nbsp;to ending!"
    data-separator=' | '
></div>
```


## Contributing

For contributions, issues and feature requests please check [issues page](https://github.com/dsabre/countdown/issues).


## Authors

- [Daniele Sabre](https://github.com/dsabre)


## Support me
<a href="https://www.buymeacoffee.com/daniele.sabre" target="_blank">
  <img src="https://raw.githubusercontent.com/dsabre/dsabre/main/images/bmc.png" alt="Buy Me a Coffee" title="Buy Me a Coffee" height="50" />
</a>


## License

[MIT](https://choosealicense.com/licenses/mit/)

