/*var bankLine = ['rohim','korim','sohel','islam','masud'];
bankLine.push('hidoy');
console.log(bankLine);
bankLine.pop('hidoy');
console.log(bankLine);*/

//first add element
var bankLine = ['rohim','korim','sohel','islam','masud'];
bankLine.unshift('mahbub');
console.log(bankLine);

//first theke remove element
var bankLine = ['rohan','tasina','rahil','samiya','rohim','korim','sohel','islam','masud'];
bankLine.shift();
console.log(bankLine);

//javascript slice
var bankLine = ['rohan','tasina','rahil','samiya','rohim','korim','sohel','islam','masud'];
var testFirstRemove = bankLine.slice(3, 5);
console.log(testFirstRemove);

//javascript splice
var bankLine = ['rohan','tasina','rahil','samiya','rohim','korim','sohel','islam','masud'];
var testFirstRemove = bankLine.splice(3,5);
console.log(testFirstRemove);