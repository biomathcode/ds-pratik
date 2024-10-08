"use strict";
var tokens = require('./tokens/js/tokens');
/**
 * Tailwind requires the values:
 *{
 *  "boxShadow": {
 *    "level-1": "value",
 *    "level-2": "...",
 *     ....
 *   },
 *  "colors": {
 *    ...
 *  },
 *  ....
 * }
 */
var flattenValue = function (obj) {
    var result = {};
    Object.keys(obj).forEach(function (key) {
        // If value property does not exist
        if (!obj[key].value) {
            // Should go one level deeper
            result[key] = flattenValue(obj[key]);
        }
        else {
            result[key] = obj[key].value;
        }
    });
    return result;
};
module.exports = {
    prefix: 'pratik-',
    theme: {
        colors: flattenValue(tokens.colors),
        borderRadius: flattenValue(tokens.radius),
        spacing: flattenValue(tokens.spacings),
        animation: flattenValue(tokens.animations),
        boxShadow: flattenValue(tokens.shadows),
        fontFamily: {
            sans: ['"Inter"'],
        },
    },
    // Enable only necessary plugins
    // https://tailwindcss.com/docs/configuration#core-plugins
    plugins: [],
};
//# sourceMappingURL=tailwindpresent.config.js.map