
var number = 5

function add(a,b){
  number += 3
  return add
}

function subtract(){
  number -= 2
}

function multiply(){
  number *= 10 // 50
}

function divide(){
  number /= 5
}
add()
console.log(number)