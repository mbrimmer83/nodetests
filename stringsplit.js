// Write a function that will split a string on a delimiter that's
//one character wide.

//split("Javascript" , "a") => ["J", "v", "script"]

function stringSplit(str, char) {
    var newStr = str.split(char);
    console.log(newStr);
}
stringSplit("Javascript", "a");

function split(str, char) {
  var results = [];
  var startIdx = 0;
  var endIdx = str.indexOf(char);
  while (endIdx !== -1) {
    var part = str.substring(startIdx, endIdx);
    results.push(part);
    startIdx = endIdx + char.length;
    endIdx = str.indexOf(char, startIdx);
  }
  var lastPart = str.substring(startIdx);
  results.push(lastPart);
  console.log(results);
}
 split("Javascript", "a");

// Check whether an array of cards is a straight

 var cards = [1, 2, 3, 4, 5];
 var cards2 = [1, 2, 4, 5, 6];

 function isStraight(arr) {
   var nRow = 1;
   for (var i = 1; i < arr.length; i++) {
     var lastCard = arr[i - 1];
     var currentCard = arr[i];
     if (currentCard - lastCard === 1) {
       nRow++;
     } else if (currentCard === lastCard) {

     } else {
       nRow = 1;
     }
     if (nRow === 5) {
       console.log(true);
       return true;
     }
   }
   console.log(false);
   return false;
 }

 isStraight(cards);
 isStraight(cards2);
