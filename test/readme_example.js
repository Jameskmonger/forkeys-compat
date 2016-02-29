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
