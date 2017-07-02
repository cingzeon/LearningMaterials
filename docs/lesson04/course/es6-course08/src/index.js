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
var [ dog, [cat, bull] ] = ["狗", ["猫", "牛"]];
//console.log( dog );
console.log( cat );
//console.log( bull );




// Object 对象解构赋值
var obj = {
  a: "1",
  b: ["狗", ["猫", "牛"]],
  fn: function(){
    console.log( this.a );
  }
}
var { a, b } = obj;
console.log( obj );
console.log( b );

var { React, Component, ProtoType} = require("react");
React.component
React.ProtoType
