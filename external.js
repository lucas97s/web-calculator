
const add = function(num1, num2) {
    return num1 + num2 ;
      
  };
  
const subtract = function(num1, num2) {
return num1 - num2 ; 
    
};

const divide = function(num1, num2) {
return num1 / num2 ; 
    
};

const multiply = function(num1,num2) {
return num1*num2 ; 
};

let firstNumber = '' ; 
let secondNumber = '' ; 
let operator = '';
let clearOrFloat = '' ; 
let index = 1 ; 
let indexForNumber = 1 ; 

function operation (firstNumber,secondNumber, operator) {
    if (operator === "+") return add(firstNumber,secondNumber) ; 
    if (operator === "-") return substract(firstNumber,secondNumber) ; 
    if (operator === "/") return divide(firstNumber,secondNumber) ; 
    if (operator === "x") return multiply(firstNumber,secondNumber) ; 
}

//gettin important nodes 

const calcBlock = document.querySelector(".cal-body") ; 
const answer = document.querySelector(".answer") ; 



//getting operators 

const operatorsNode = document.querySelectorAll(".operators .child-buttons") ;
console.log(operatorsNode) ; 

operatorsNode.forEach(button => {
    button.addEventListener('click', function(element){
        index = 2 ; 
        if (index == 2 ) { 
            operator = element.target.textContent ;
            console.log(operator) ; 
            index = 3 ;
            console.log(index) ;  
        }
        
    })
});


//getting numbers 

const numberNodes = document.querySelectorAll(".numbers .child-buttons");
console.log(numberNodes) ; 


numberNodes.forEach(button => {
    button.addEventListener('click', function(element){
        if (index == 1 ) {
            firstNumber = firstNumber + element.target.textContent ; 
            console.log (firstNumber) ;
            index = 2 ; 
        } else if (index == 3) {
            secondNumber = secondNumber + element.target.textContent ; 
            index = 4 ; 
        }
    })
});


//getting other operators 

const otherNodes = document.querySelectorAll(".others .child-buttons");
console.log(otherNodes) ; 

otherNodes.forEach(button => {
    button.addEventListener('click', function(element){
        index = 4 ; 
        firstNumber = parseFloat(firstNumber) ; 
        secondNumber = parseFloat(secondNumber) ;    clearOrFloat = element.target.textContent ;
        if (index == 4 && clearOrFloat == "=") {
            firstNumber = operation(firstNumber,secondNumber,operator) ; 
            console.log(firstNumber) ;
            answer.textContent = firstNumber ; 
            index = 2 ; 
        }

    })
});

/* Okay I am stuck, now I know how to do the operation. What I want. 
Firstly we need to click the first number, then move to the operator then only second number. This sequence must be followed all times.
If they want to add more */


