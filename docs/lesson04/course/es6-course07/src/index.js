var name = "cat";
var age = "1";

// ES5 字符串拼接
var str = name + " is " + age + " years old ES5.";
console.log( str );

var htmlStr = '<div><div>' + name + '</div>'+
              '<h1>' + age + '</h1></div>';
              console.log(htmlStr);




// ES6 模板字符串
var temStr = `${name} is ${age} years old ES6.`;
console.log( temStr );

var htmlTemStr = `<div>
                    <div> ${name} </div>
                    <h1> ${age} </h1>
                  </div>`;
                  console.log( htmlTemStr );
