"use strict";

// 课时8 8. 解构赋值

/*
  var arr = ["狗", "猫", "牛"];
  var [ dog, cat, bull ] = arr;
  console.log( dog );
  console.log( cat );
  console.log( bull );
*/

// 数组 Array
/*var [ dog, , bull ] = ["狗", "猫", "牛"];
console.log( dog );
console.log( bull );*/

// 数组 Array
var dog = "狗",
    cat = "猫",
    bull = "牛";
//console.log( dog );

console.log(cat);
//console.log( bull );


// Object 对象解构赋值
var obj = {
  a: "1",
  b: ["狗", ["猫", "牛"]],
  fn: function fn() {
    console.log(this.a);
  }
};
var a = obj.a,
    b = obj.b;

console.log(obj);
console.log(b);

var _require = require("react"),
    React = _require.React,
    Component = _require.Component,
    ProtoType = _require.ProtoType;

React.component;
React.ProtoType;