(function(m) {
    "use strict";

    m.exports = function (obj, cb) {
        Object.keys(obj).forEach(cb);
    };
})(module);
