function* naturalNumbers(){
  var n = 1;
  while (true){
    yield n++;
  }
}

var numbers = naturalNumbers();
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
