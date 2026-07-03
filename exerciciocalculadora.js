let a = 5
let b = 10

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