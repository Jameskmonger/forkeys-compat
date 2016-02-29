# forkey

A wrapper around `Object.keys(...).forEach(...)`.

## Example

You can see an example [here](test/readme_example.js).

```javascript
const forkeys = require('../index.js');

(() => {
    "use strict";

    let obj = {
        firstKey: 0,
        secondKey: "bla",
        final_key: "last one"
    };

    forkeys(obj, (key) => {
        console.log(`forkeys: key: ${key}, val: ${obj[key]}`);
    });
})();
```

## License
Created by [jameskmonger](http://github.com/jameskmonger), licensed under [The Unlicense](http://unlicense.org) (see [LICENSE](/LICENSE)).
