let contador = 0;

const textoContador = document.querySelector("#contador");

function atualizarContador() {
    textoContador.textContent = contador;
}

const botaoAumentar = document.querySelector("#Aumentar");
botaoAumentar.addEventListener("click", function () {
    contador++;
    atualizarContador();
});

const botaoReduzir = document.querySelector("#Reduzir");
botaoReduzir.addEventListener("click", function () {
    contador--;
    atualizarContador();
});

const botaoZerar = document.querySelector("#Zerar");
botaoZerar.addEventListener("click", function () {
    contador = 0;
    atualizarContador();
});