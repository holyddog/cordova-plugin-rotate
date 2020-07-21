var exec = require('cordova/exec');

module.exports = {
    reverse: function (success, error, options) {
        exec(success, error, "Rotate", "reverse", [options]);
    },
    portrait: function (success, error, options) {
        exec(success, error, "Rotate", "portrait", [options]);
    },
    landscape: function (success, error, options) {
        exec(success, error, "Rotate", "landscape", [options]);
    }
};