var others = { data: "other data" }
var obj = {
  __proto__: others,
  name: "Alan",
  getName(){
    console.log(this.name);
  }
}
console.log( obj.data );



// 简化以后
var a = 1;
var b = "2";
var fn = ( m, n ) => console.log( m + n );
var objAnother = { a, b, yfn };
console.log( objAnother.fn( 1, 4 ));
