(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "react-dom"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("react-dom"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.reactDom);
    global.RenderJSX = mod.exports;
  }
})(this, function (_react, _reactDom) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var MyComponent = function (_Component) {
    _inherits(MyComponent, _Component);

    function MyComponent() {
      _classCallCheck(this, MyComponent);

      return _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).apply(this, arguments));
    }

    _createClass(MyComponent, [{
      key: "render",
      value: function render() {
        return _react2.default.createElement(
          "h1",
          null,
          " Hello World "
        );
      }
    }]);

    return MyComponent;
  }(_react.Component);

  (0, _reactDom.render)(_react2.default.createElement(MyComponent, null), document.getElementById("app"));
});