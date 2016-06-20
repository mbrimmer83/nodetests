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
