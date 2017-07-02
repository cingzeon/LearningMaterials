"use strict";

var a = 1;
var b = "hello es6";

var fn = function fn(p) {
  return p;
};

var fn1 = function fn1() {
  return "无参数输入的箭头函数";
};

var fn2 = function fn2(a, b) {
  return a + b;
};
console.log(fn2(1, 4));

var fn3 = function fn3(a, b) {
  var m = a + 2;

  // 显示的 return
  return m * b;
};
console.log(fn3(2, 5));

// ES5
var obj = {
  name: "Alan",
  courses: ["react", "nodejs", "mongodb"],
  getMessage: function getMessage() {
    this.courses.forEach(function (item) {
      console.log(this); // undefined
      console.log(this.name + " tech us " + item);
    }.bind(this));
  }
};
obj.getMessage();

// ES6 箭头函数
var objs = {
  name: "Alan",
  courses: ["react", "nodejs", "mongodb"],
  getMessage: function getMessage() {
    var _this = this;

    this.courses.forEach(function (item) {
      console.log(_this); // undefined
      console.log(_this.name + " tech 箭头函数 us " + item);
    });
  }
};
objs.getMessage();