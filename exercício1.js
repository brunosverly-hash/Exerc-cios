let saldo = 1000;
let saque = 1200;
try {
    if (saque > saldo)
        throw new Error("Saldo insuficiente");
    saldo -= saque;
    console.log("Saque realizado com sucesso. Saldo atual: " + saldo);
} catch (error) {
    console.log(error.message);
}