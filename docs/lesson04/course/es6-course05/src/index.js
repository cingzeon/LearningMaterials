// ES5的类
function Animal(name, age){
  this.name = name;
  this.age = age;
}

Animal.prototype = {
  getMessage: function(){
    console.log(this.name + " is " + this.age + " years old");
  }
};

var cat  = new Animal("cat", "2");
cat.getMessage();


// ES6 的类
class Animals {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  getMessage(){
    console.log(this.name + " ES6 is " + this.age + "years old");
  }

 // 添加静态的方法
  static showInfo(){
    console.log("show infor~!");
  }
}

// 继承
class Cats extends Animals {
  constructor(name, age, color){
    super(name, age);
    this.color = color;
  };

  getName(){
    console.log( this.name + ", color is " + this.color );
  };
}




var cats = new Animals("呈琛", "6", "red");
cats.getMessage();
Animals.showInfo();
console.log(cat.__propo__);
