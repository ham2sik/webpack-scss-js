/* eslint-disable no-unused-vars */
const cssExports = require("./css-config"); // css config object
const jsExports = require("./js-config"); // js config object
const imgExports = require("./img-config"); // img config object

// Return Array of Configurations
module.exports = [cssExports.common, cssExports.guide, cssExports.page_template, jsExports.event.summerFestival_2019, jsExports.test];
// module.exports = [imgExports.common];
