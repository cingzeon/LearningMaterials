/*function Person( name, age ) {
  if(typeof name == "undefined") name = name || "Alan";
  if(typeof age == "undefined") age = age || "18";
  return name + ' ' + age;
}
Person("Alan")*/

let Persons = ( name="Alan", age="18" ) => name + ' ' + age;
let per = Persons("Alan");
console.log(per);



// keys 任意参数
function agrv(obj, ...keys){
  //console.log(arguments);
  //console.log(keys);

  var res = Object.create(null);
  for(var i = 0; i < keys.length; i++){
    res[keys[i]] = obj[keys[i]]
  }
  return res;
}
var data = {
  title:"es6",
  name:"alan"
}
var msg = agrv(data, "title", "name", "age");
console.log(msg.title);




// 创建一个数组
  var arrys = [15,89,75,9912,12,35];
  var newArr = [...arrys, 100, 1822, 5000];
  console.log(newArr);

  // 取最大值
  var max = Math.max(...newArr);
  console.log(max);

  // 取最小值
  var min = Math.min(...newArr);
  console.log(min);
