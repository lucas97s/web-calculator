
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

function resetVariables () {
    firstNumber = '' ; 
    secondNumber = '' ; 
    operator = '';
    clearOrFloat = '' ; 
    index = 1 ; 
    answer.textContent = '' ;
    numberDisplay.textContent = '';
    flipPercentage = 1 ; 
}

let firstNumber = '' ; 
let secondNumber = '' ; 
let operator = '';
let clearOrFloat = '' ; 
let index = 1 ; 
const numberOfDecimalPlace = 2 ; 
let flipPercentage = 1 ; 
const minLengthFirstNumber = 7 ; 
const maxTotalLength = 12 ; 
let minLengthForOperator = 11 ; 


console.log(secondNumber == '')   

function operation (firstNumber,secondNumber, operator) {
    if (operator === "+") return add(firstNumber,secondNumber) ; 
    if (operator === "-") return subtract(firstNumber,secondNumber) ; 
    if (operator === "/") return divide(firstNumber,secondNumber) ; 
    if (operator === "x") return multiply(firstNumber,secondNumber) ; 
}

function roundUpToDecimal (number, demicalPlace) {
    let factor = Math.pow(10,demicalPlace); 
    return Math.ceil(number*factor) / factor ; 
}

function isNumber(value) {
    return (!isNaN(parseFloat(value)) && isFinite(value)) || (value == '.');
}

function isOperator(operator) {
    if (operator === "+") return true ; 
    if (operator === "-") return true ; 
    if (operator === "/") return true ;  
    if (operator === "x") return true ; 
}

//gettin important nodes 

const calcBlock = document.querySelector(".cal-body") ; 
const answer = document.querySelector(".answer") ; 
const numberDisplay = document.querySelector(".numbers-display")


//getting operators 

const operatorsNode = document.querySelectorAll(".operators .child-buttons") ;
console.log(operatorsNode) ; 

operatorsNode.forEach(button => {
    button.addEventListener('click', function(element){
        let lengthCheck = numberDisplay.textContent ;
        console.log(lengthCheck.length) ; 

        if (lengthCheck.length < (maxTotalLength-2)){
            
 
            if ( !(firstNumber === '') && operator == 0  ) { 
                operator = element.target.textContent;
                console.log(operator) ; 
                console.log(index) ;  
                index = 2 ; 
                numberDisplay.textContent = firstNumber + ' ' + operator ;
            }
            

        }

        
    })
});




//getting numbers 

const numberNodes = document.querySelectorAll(".numbers .child-buttons");
console.log(numberNodes) ; 


numberNodes.forEach(button => {
    button.addEventListener('click', function(element){

        let lengthCheck = numberDisplay.textContent ;
        console.log(lengthCheck.length) ;  

        // After a dot has been acquired no longer dot can be initiated 
        if( lengthCheck.length <= minLengthFirstNumber ){
            
            if (index == 1 ){
                if (!(firstNumber.includes('.') && element.target.textContent == ".")) {
                    firstNumber = firstNumber + element.target.textContent ; 
                    console.log (firstNumber) ;
                    numberDisplay.textContent = firstNumber ;
                }

            }
        

            if (index == 2 && !(operator == 0)) {
                if (!(secondNumber.includes('.') && element.target.textContent == ".")){
                    secondNumber = secondNumber + element.target.textContent ; 
                    console.log(secondNumber) ; 
                    numberDisplay.textContent = firstNumber + ' ' + operator + ' ' + secondNumber ;  
                }

            }

        } else if ( (lengthCheck.length <= minLengthForOperator) && !(operator == 0) ){
            if (index == 2 && !(operator == 0)) {
                if (!(secondNumber.includes('.') && element.target.textContent == ".")){
                    secondNumber = secondNumber + element.target.textContent ; 
                    console.log("this is being triggered") ;
                    console.log(operator) ;
                    console.log(operator == 0) ; 
                    numberDisplay.textContent = firstNumber + ' ' + operator + ' ' + secondNumber ;  
                    minLengthForOperator = maxTotalLength ; 
                    }


            }

        }
    });
}); 


//getting other operators 

const otherNodes = document.querySelectorAll(".others .child-buttons");
console.log(otherNodes) ; 

otherNodes.forEach(button => {
    button.addEventListener('click', function(element){

        clearOrFloat = element.target.textContent ;

        if (!(secondNumber == '') && clearOrFloat == "=") {
            firstNumber = parseFloat(firstNumber) ; 
            secondNumber = parseFloat(secondNumber) ;    
            firstNumber = roundUpToDecimal(operation(firstNumber,secondNumber,operator),numberOfDecimalPlace) ; 
            console.log(firstNumber) ;
            answer.textContent = firstNumber ; 
            secondNumber = ''   ; 
            operator = '' ; 
            numberDisplay.textContent = firstNumber ;

        }

        if (clearOrFloat == "AC") {
            resetVariables() ; 
        }

        if (clearOrFloat == "%" && operator == '' && flipPercentage == 1) {
            firstNumber = firstNumber/100 ; 
            numberDisplay.textContent = firstNumber ;
            answer.textContent = firstNumber ; 
            flipPercentage = 2 ; 
        } else if (clearOrFloat == "%" && operator == '' && flipPercentage == 2){
            firstNumber = firstNumber*100 ; 
            numberDisplay.textContent = firstNumber ;
            answer.textContent = firstNumber ; 
            flipPercentage = 1 ; 
        }

        
        if (clearOrFloat == "+/-" && operator == '' ) {
            firstNumber = firstNumber*(-1) ; 
            numberDisplay.textContent = firstNumber ;
            answer.textContent = firstNumber ;  
        } 

    })
});

/* Okay I am stuck, now I know how to do the operation. What I want. 
Firstly we need to click the first number, then move to the operator then only second number. This sequence must be followed all times.
If they want to add more */

document.addEventListener("keypress", function(element){
    let lengthCheck = numberDisplay.textContent ;
    console.log(lengthCheck.length) ;  

    let elementCheck = element.key ; 

        // After a dot has been acquired no longer dot can be initiated 
        if( lengthCheck.length <= minLengthFirstNumber && isNumber(elementCheck) ){
        
            if (index == 1 ){
                if (!(firstNumber.includes('.') && elementCheck == ".")) {
                    firstNumber = firstNumber + elementCheck ; 
                    console.log (firstNumber) ;
                    numberDisplay.textContent = firstNumber ;
                }
    
            }
        
    
            if (index == 2 && !(operator == 0)) {
                if (!(secondNumber.includes('.') && elementCheck == ".")){
                    secondNumber = secondNumber + elementCheck ; 
                    console.log(secondNumber) ; 
                    numberDisplay.textContent = firstNumber + ' ' + operator + ' ' + secondNumber ;  
                }
    
            }
    
        } else if ( (lengthCheck.length <= minLengthForOperator) && !(operator == 0) && isNumber(elementCheck)){
            if (index == 2 && !(operator == 0)) {
                if (!(secondNumber.includes('.') && elementCheck == ".")){
                    secondNumber = secondNumber + elementCheck ; 
                    console.log("this is being triggered") ;
                    console.log(operator) ;
                    console.log(operator == 0) ; 
                    numberDisplay.textContent = firstNumber + ' ' + operator + ' ' + secondNumber ;  
                    minLengthForOperator = maxTotalLength ; 
                    }
    
    
            }
    
        }
        if (lengthCheck.length < (maxTotalLength-2) && isOperator(elementCheck)){
                
     
            if ( !(firstNumber === '') && operator == 0  ) { 
                operator = elementCheck ;
                console.log(operator) ; 
                console.log(index) ;  
                index = 2 ; 
                numberDisplay.textContent = firstNumber + ' ' + operator ;
            }
            
    
        }
    
    
        if (!(secondNumber == '') && elementCheck == "=") {
            firstNumber = parseFloat(firstNumber) ; 
            secondNumber = parseFloat(secondNumber) ;    
            firstNumber = roundUpToDecimal(operation(firstNumber,secondNumber,operator),numberOfDecimalPlace) ; 
            console.log(firstNumber) ;
            answer.textContent = firstNumber ; 
            secondNumber = ''   ; 
            operator = '' ; 
            numberDisplay.textContent = firstNumber ;
    
        }
    
        if (elementCheck == "AC") {
            resetVariables() ; 
        }
    
        if (elementCheck == "%" && operator == '' && flipPercentage == 1) {
            firstNumber = firstNumber/100 ; 
            numberDisplay.textContent = firstNumber ;
            answer.textContent = firstNumber ; 
            flipPercentage = 2 ; 
        } else if (elementCheck == "%" && operator == '' && flipPercentage == 2){
            firstNumber = firstNumber*100 ; 
            numberDisplay.textContent = firstNumber ;
            answer.textContent = firstNumber ; 
            flipPercentage = 1 ; 
        }
    
})

