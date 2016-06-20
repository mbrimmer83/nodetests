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
