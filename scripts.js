let num1 = '';
let num2 = '';
let operator = '';
let current = 'first';
const bottomDiv = document.querySelector('.bottom');
const enter = document.querySelector('.enter');
const displayDiv = document.querySelector('.display');
const display = document.querySelector(".content");
const rickRoll = document.createElement('img');
rickRoll.setAttribute("src", "icegif-162.gif");

for (let i=0;i<10;i++) {
    let number = document.createElement("button");
    number.textContent = i;
    number.classList.add('number')
    number.addEventListener('click', firstNumberSelect)
    bottomDiv.insertBefore(number, enter);
}

function updateDisplay(info) {
    display.textContent = info;
}

function switchFunction(to) {
    let numbers = Array.from(document.querySelectorAll('.number'))
    if (to == 'first') {
        numbers.map((number)=>number.removeEventListener('click', secondNumberSelect))
        numbers.map((number)=>number.addEventListener('click', firstNumberSelect))
    }
    else {    
        numbers.map((number)=>number.removeEventListener('click', firstNumberSelect))
        numbers.map((number)=>number.addEventListener('click', secondNumberSelect))
    }
    current = to;
}

function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function operate(operator, n1, n2) {
    let intn1 = Number(n1);
    let intn2 = Number(n2);
    if (intn2==0 && operator=='/') {
        console.log('gET RICkrolled')
        displayDiv.appendChild(rickRoll);
    }
    else {
        switch (operator) {
            case '+':
                return add(intn1, intn2)
            case '-':
                return subtract(intn1, intn2)
            case '/':
                return divide(intn1, intn2)
            case '*':
                return multiply(intn1, intn2)
        }
}
}

function firstNumberSelect(num) {
    num1 = num1.toString()
    if ((num1.length >= 0 || num.target.textContent != 0) && num1.length < 20)  {num1 += num.target.textContent;}
    updateDisplay(num1);
    bottomDiv.addEventListener('click', operationSelect);
}

function secondNumberSelect(num) {
    if ((num2.length >= 0 || num.target.textContent != 0) && num2.length < 20)  {num2 += num.target.textContent;}
    updateDisplay(num2);
}


function operationSelect(operation) {
    let operatorClass = operation.target.className;
    if (!(operatorClass == 'number' || operatorClass == 'bottom' || operatorClass == 'enter' || operatorClass == 'clear' || operatorClass == 'reset')) {
        operator = operation.target.textContent;
        updateDisplay(operator);
        switchFunction('second');
        current = 'third';
    }
    else if (operatorClass == 'enter' && num2 != '') {
        let result = operate(operator, num1, num2);
        updateDisplay(result);
        num1 = result;
        num2 = '';
        operator = '';
        switchFunction('first')
    }
    else if (operatorClass == 'clear') {
        num1 = num1.toString()
        num2 = num2.toString()
        console.log('meow')
        console.log(num1.slice(0, num1.length-1))
        switch (current) {
            case 'first':
                num1 = num1.slice(0, num1.length-1);
                updateDisplay(num1)
                break;
            case 'second':
                num2 = num2.slice(0, num2.length-1);
                updateDisplay(num2)
                break;
            case 'first':
                operator = operator.slice(0, operator.length-1);
                updateDisplay(operator)
                break;
        }
    }
    else if (operatorClass == 'reset') {
        num1 = '';
        num2 = '';
        operator = '';
        bottomDiv.removeEventListener('click', operationSelect);
        updateDisplay(num1)
        switchFunction('first');
    }
}

