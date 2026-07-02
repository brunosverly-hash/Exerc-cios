const comanda = [
  {pedido: "Torresmo", preço: 40.50, quantidade: 1},
  {pedido: "Bebida", preço: 7.50, quantidade: 5},
  {pedido: "Batata Frita", preço: 38.00, quantidade: 1},
  {pedido: "Chopp", preço: 12.00, quantidade: 2},
];
// Digite seu código abaixo

for (let i of comanda) {
  let total = i.preço * i.quantidade;
  console.log(`O pedido de ${i.pedido} custa R$${total.toFixed(2)}`);
}

let totalComanda = 0;
for (let i of comanda) {
  totalComanda += i.preço * i.quantidade;
}
console.log(`O total da comanda é R$${totalComanda.toFixed(2)}`);

let totalComServiço = totalComanda + (totalComanda * 0.1);
console.log(`O total da comanda com serviço é R$${totalComServiço.toFixed(2)}`);
