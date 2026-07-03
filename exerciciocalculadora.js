let a = 35
let b = 5

function soma(a, b) {
    try {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Os parâmetros devem ser números.");
        }
        return a + b;
    }
    catch (error) {
        console.error(error.message);
        return error.message;
        console.log("Resultado da soma: " + soma(a, b));
    }
}
function processar(parametro1, parametro2, operacao) {
    return operacao(parametro1, parametro2);
}
console.log("Soma: " + processar(a, b, soma));

function subtrai(a, b) {
    try {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Os parâmetros devem ser números.");
        }
        return a - b;
    }
    catch (error) {
        console.error(error.message);
        return error.message;
        console.log("Resultado da subtração: " + subtrai(a, b));
    }
}
function processar(parametro1, parametro2, operacao) {
    return operacao(parametro1, parametro2);
}
console.log("Subtração: " + processar(a, b, subtrai));

function multiplica(a, b) {
    try {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Os parâmetros devem ser números.");
        }
        return a * b;
    }
    catch (error) {
        console.error(error.message);
        return error.message;
        console.log("Resultado da multiplicação: " + multiplica(a, b));
    }
}
function processar(parametro1, parametro2, operacao) {
    return operacao(parametro1, parametro2);
}
console.log("Multiplicação: " + processar(a, b, multiplica));

function divide(a, b) {
    try {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Os parâmetros devem ser números.");
        }
        if (b === 0) {
            throw new Error("O segundo parâmetro não pode ser zero.");
        }
        return a / b;
    }
    catch (error) {
        console.error(error.message);
        return error.message;
        console.log("Resultado da divisão: " + divide(a, b));
    }
}
function processar(parametro1, parametro2, operacao) {
    return operacao(parametro1, parametro2);
}
console.log("Divisão: " + processar(a, b, divide));