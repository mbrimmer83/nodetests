// Hello World with OOP
function Hello(name) {
  this.name = name;
}
Hello.prototype.greet = function () {
  console.log('Hello, '+ this.name + '!');
};
function myObjects (){
  var world = new Hello('World');
  var matthew = new Hello('Matthew');
  var room = new Hello('Class');
  world.greet();
  matthew.greet();
  room.greet();
}
myObjects();

// builds an array with OOP
var newArray = [];
function CreateArray(arrayItem) {
  this.arrayItem = arrayItem;
}
CreateArray.prototype.make = function(){
  newArray.push(this.arrayItem);
};
function makeArray(){
  var matthew = new CreateArray('Matthew');
  var toby = new CreateArray('Toby');
  var regan = new CreateArray('Regan');
  matthew.make();
  toby.make();
  regan.make();
}
makeArray();
