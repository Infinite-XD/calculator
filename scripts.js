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
    switch (operator) {
        case '+':
            return add(n1, n2)
        case '-':
            return subtract(n1, n2)
        case '/':
            return divide(n1, n2)
        case '*':
            return divide(n1, n2)
    }
}


