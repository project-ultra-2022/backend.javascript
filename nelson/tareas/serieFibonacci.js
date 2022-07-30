// serie bufonachi

var num1 = 1
var num2 = 1
var num3
console.log(num1)
console.log(num2)
var i = 0
var j = 98
for(i; i<j; i++){
    num3 = num1 + num2
    num1 = num2
    num2 = num3
    console.log(num3)
}