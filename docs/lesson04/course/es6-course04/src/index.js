let a = 1;
const b = "hello es6";

var fn = p => p;

let fn1 = () => "无参数输入的箭头函数";

let fn2 = ( a, b ) => a + b;
console.log( fn2( 1, 4 ) );

let fn3 = ( a, b ) => {
  let m = a + 2;

  // 显示的 return
  return m * b;
}
console.log( fn3(2, 5) );



// ES5
var obj = {
  name: "Alan",
  courses: ["react", "nodejs", "mongodb"],
  getMessage: function(){
    this.courses.forEach(function( item ){
      console.log( this ); // undefined
      console.log(this.name + " tech us " + item);
    }.bind(this));
  }
}
obj.getMessage();

// ES6 箭头函数
var objs = {
  name: "Alan",
  courses: ["react", "nodejs", "mongodb"],
  getMessage: function(){
    this.courses.forEach(( item ) => {
      console.log( this ); // undefined
      console.log(this.name + " tech 箭头函数 us " + item);
    });
  }
}
objs.getMessage();
