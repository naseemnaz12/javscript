//convert string to integer and decimal   
// chp 28
// var currentAge = prompt("Enter your age.");
//  var yearsEligibleToVote = currentAge - 18;
//  console.log(yearsEligibleToVote);


//  var profit = "200" - "150";
//  console.log(profit);

//  var profit = "200" - "duck";
//  console.log(profit);

//  var currentAge = prompt("Enter your age.");
//  var qualifyingAge = parseInt(currentAge) + 1;
//  console.log(qualifyingAge);


// var integerString = "24"
//  var num = Number(integerString);
//  console.log(num);

//  var floatingNumString = "24.9876";
//  var num = Number(floatingNumString);
//  console.log(num);

//  var numberAsNumber = 1234;
//  var numberAsString = numberAsNumber.toString();
//  console.log(numberAsString);


// chp 30
// let price = 9.95;
// let sale = 0.065;
// let total = price+(price * sale);
// console.log(total.toFixed(2));

// let num = 12345;
// var str = num.toString();
// if (str.charAt(str.length - 1) === "5") {
//  str = str.slice(0, str.length - 1) + "6";
//  }
//  num = Number(str);
//  prettyNum = num.toFixed(2);
//  console.log(prettyNum);


//chp 31 getting current date and time
// let rightNow = new Date();                  // new is constructer and Date is method
// document.write (rightNow);
// var dateString = rightNow.toString();
// document.write("<br>" + dateString);



// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
//  console.log(theDay);
//  console.log(nameOfToday);

//  var dayNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul"];
//  var now = new Date();
//  var theDay = now.getMonth();
//  var nameOfToday = dayNames[theDay];
//  console.log(theDay);
//  console.log(nameOfToday);


var d = new Date();
var currentHrs = d.getHours();
console.log(currentHrs);
 var currMins = d.getMinutes();
 console.log(currMins);
var currSecs = d.getSeconds();
console.log(currSecs);

