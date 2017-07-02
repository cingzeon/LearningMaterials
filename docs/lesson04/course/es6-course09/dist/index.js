"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*function Person( name, age ) {
  if(typeof name == "undefined") name = name || "Alan";
  if(typeof age == "undefined") age = age || "18";
  return name + ' ' + age;
}
Person("Alan")*/

var Persons = function Persons() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Alan";
  var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "18";
  return name + ' ' + age;
};
var per = Persons("Alan");
console.log(per);

// keys 任意参数
function agrv(obj) {
  //console.log(arguments);
  //console.log(keys);

  var res = Object.create(null);

  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < keys.length; i++) {
    res[keys[i]] = obj[keys[i]];
  }
  return res;
}
var data = {
  title: "es6",
  name: "alan"
};
var msg = agrv(data, "title", "name", "age");
console.log(msg.title);

// 创建一个数组
var arrys = [15, 89, 75, 9912, 12, 35];
var newArr = [].concat(arrys, [100, 1822, 5000]);
console.log(newArr);

// 取最大值
var max = Math.max.apply(Math, _toConsumableArray(newArr));
console.log(max);

// 取最小值
var min = Math.min.apply(Math, _toConsumableArray(newArr));
console.log(min);