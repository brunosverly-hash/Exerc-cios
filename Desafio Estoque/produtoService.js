import {readFile} from "node:fs/promises";

const conteudo = await readFile("./produtos.json", "utf-8");

let produtos = JSON.parse(conteudo);

const produto = 
    produtos.find(
        p => p.id === 2
    );

console.log(produto);