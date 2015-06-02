console.log("Your code goes in this document.");

_.times(100, function() {
  console.log("hi");
});

//--------------------Question 1------------------------------------------------

var arrPrice = items.map(function(value){ //this part pulls the price from all objects
  return value.price;
});

var allPrice = arrPrice.reduce(function(acc, curr){ //this part combines all object prices together
  return acc + curr;
});

var averagePrice= allPrice / arrPrice.length; //this part takes the average based on the length

averagePrice = Math.floor(averagePrice); //this section rounds down to the closest dollar price

console.log("this is the average price of all items: " + averagePrice);

 // var current = document.getElementById("answer1");
 // console.log(current);
 document.getElementById("answer1").innerHTML = "The average price is: " + averagePrice; // this part puts our average price

//--------------------Question 2------------------------------------------------

var betweenPrice = items.filter(function(value){ //this part pulls the price from all objects
  return value.price > 14 && value.price < 18;
});


console.log(betweenPrice);

var priceString = betweenPrice.map(function(value){
  return value.price + ": " + value.title + "</br>";
});
document.getElementById("answer2").innerHTML ="";
priceString.forEach(function(item){
  document.getElementById("answer2").innerHTML += item;
});


//--------------------Question 3 -----------------------------------------------

var currencyGBP = items.filter(function(value){ //this part filters out the objects with GBP currency
  return value.currency_code === 'GBP';
})

console.log(currencyGBP);
//The below part will prin the cost and title for items that have a GBP currency code
document.getElementById("answer3").innerHTML = currencyGBP.map(function(value){
return value.price + ": " + value.title + "</br>";
});

//--------------------Question 4 -----------------------------------------------
var woodItems = items.filter(function(element){ //this goes through the items
    // console.log(element.materials);
    // console.log(length)
    return element.materials.indexOf("wood") !== -1;
});

console.log(woodItems);

var woodString = woodItems.map(function(value){
    return "This item is made of Wood:  " + value.title + "</br>";});

document.getElementById("answer4").innerHTML ="";
woodString.forEach(function(item){
  document.getElementById("answer4").innerHTML += item;
});



//--------------------Question 5 -----------------------------------------------

var eightOrMore = items.filter(function(value){
  return value.materials.length >= 8;
})

console.log(eightOrMore);

var eightString= eightOrMore.map(function(value){
return value.title + ": " + value.materials.length + " Materials: "+ value.materials + "</br>";
});

document.getElementById("answer5").innerHTML ="";
eightString.forEach(function(item){
  document.getElementById("answer5").innerHTML += item;
});


//--------------------Question 6 -----------------------------------------------

var whoMade = items.filter(function(value){
  return value.who_made === "i_did";
})

console.log(whoMade);

document.getElementById("answer6").innerHTML = whoMade.length + " were made by their seller!";
