function Soma(num1, num2){
    return num1 + num2;
}

function Sub(num1 , num2){
  return num1 - num2;
}

function Div( num1 ,  num2){
  if(num2 == 0 ){
    return console.log("Divisao por 0");
  }else{
    return num1/num2;
  }
}

function Mult(num1,  num2){
  return num1*num2;
}

function Piso(num1,  num2){
  return num1;
}

function Teto(num1, num2){
  return num1 + 1;
}


console.log(Soma(10,5));
console.log(Sub(10,5));
console.log(Div(10,5));
console.log(Mult(10,5));
console.log(Piso(10,5));
console.log(Teto(10,5));