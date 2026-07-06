class Funcionario {
    constructor(nome, cargo, salario, departamento) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.departamento = departamento;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, sou ${this.cargo} no departamento de ${this.departamento} e meu salário é R$${this.salario}.`);
    }

    aumentarSalario(valor) {
        this.salario += valor;
        console.log(`O salário de ${this.nome} foi aumentado para R$${this.salario}.`);
    }

    promover(NovoCargo) {
        this.cargo = NovoCargo;
        console.log(`${this.nome} foi promovido para ${this.cargo}.`);
    }
}

const funcionario1 = new Funcionario("João", "Desenvolvedor", 5000, "TI");

funcionario1.apresentar();
funcionario1.aumentarSalario(500);
funcionario1.promover("Senior Developer");
