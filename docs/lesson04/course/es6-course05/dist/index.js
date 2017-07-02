"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ES5的类
function Animal(name, age) {
  this.name = name;
  this.age = age;
}

Animal.prototype = {
  getMessage: function getMessage() {
    console.log(this.name + " is " + this.age + " years old");
  }
};

var cat = new Animal("cat", "2");
cat.getMessage();

// ES6 的类

var Animals = function () {
  function Animals(name, age) {
    _classCallCheck(this, Animals);

    this.name = name;
    this.age = age;
  }

  _createClass(Animals, [{
    key: "getMessage",
    value: function getMessage() {
      console.log(this.name + " ES6 is " + this.age + "years old");
    }

    // 添加静态的方法

  }], [{
    key: "showInfo",
    value: function showInfo() {
      console.log("show infor~!");
    }
  }]);

  return Animals;
}();

// 继承


var Cats = function (_Animals) {
  _inherits(Cats, _Animals);

  function Cats(name, age, color) {
    _classCallCheck(this, Cats);

    var _this = _possibleConstructorReturn(this, (Cats.__proto__ || Object.getPrototypeOf(Cats)).call(this, name, age));

    _this.color = color;
    return _this;
  }

  _createClass(Cats, [{
    key: "getName",
    value: function getName() {
      console.log(this.name + ", color is " + this.color);
    }
  }]);

  return Cats;
}(Animals);

var cats = new Animals("呈琛", "6", "red");
cats.getMessage();
Animals.showInfo();
console.log(cat.__propo__);