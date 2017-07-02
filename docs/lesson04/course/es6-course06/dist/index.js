"use strict";

var others = { data: "other data" };
var obj = {
  __proto__: others,
  name: "Alan",
  getName: function getName() {
    console.log(this.name);
  }
};
console.log(obj.data);

// 简化以后
var a = 1;
var b = "2";
var fn = function fn(m, n) {
  return console.log(m + n);
};
var objAnother = { a: a, b: b, fn: fn };
console.log(objAnother.fn(1, 4));
