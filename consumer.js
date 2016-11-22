function* consumer(){
  while (true){
    try{
      var val = yield null;
      console.log('Got value', val);
    }catch(e){
      console.log('You threw an error but I caught it ;P');
    }
  }
}

var c = consumer();
c.next();
c.next(1);
c.next(2);
c.next(3);
c.throw(new Error('blarg!'))
c.next(4);
c.next(5);
c.next(6);
