function Cat(name, color) {
  this.name = name;
  this.color = color;
  console.log("Cat constructor");
}
console.log("Cat C prato"+JSON.stringify(Cat.prototype))
Cat.prototype.age = 4;
  console.log("Cat age");

var catC = new Cat("Fluffy", "White");


var catA = {name: "Fluffy", color: "White", age: 0};

var catB = Object.create(new Object());
catB.name = "Fluffy";
catB.color = "White";
catB.age = 0;
catA.__proto__;

 console.log("Cat proto"+catA.__proto__);
Object.getPrototypeOf(catA);

console.log("Cat C prato"+JSON.stringify(Cat.prototype))
catC.__proto__;

console.log("Cat C prato"+JSON.stringify(catC))