(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./sum.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./sum.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.sum);
    global.app = mod.exports;
  }
})(this, function (_sum) {
  "use strict";

  var _sum2 = _interopRequireDefault(_sum);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var result = (0, _sum2.default)(16, 99);
  console.log(result);
});