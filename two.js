function* two(){
  yield 1;
  yield 2;
}

var seq = two();
console.log(seq.next());
console.log(seq.next());
console.log(seq.next());
