var forkeys = require('../index.js');

(function() {
    "use strict";

    var obj = {
        firstKey: 0,
        secondKey: "bla",
        final_key: "last one"
    };

    forkeys(obj, function (key) {
        console.log("forkeys: key: " + key + ", val: " + obj[key]);
    });
})();
