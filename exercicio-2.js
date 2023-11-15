const empregados = [
  { nome: 'João', salario: 1200 },
  { nome: 'Maria', salario: 1500 },
  { nome: 'Pedro', salario: 1800 },
  { nome: 'Ana', salario: 1400 },
  { nome: 'Carlos', salario: 2000 }
]

const temEmpregadoComSalarioMaiorOuIgual1500 = empregados.some(empregado => empregado.salario >= 1500)
console.log(`Tem algum empregado com salário maior ou igual a R$1.500,00? ${temEmpregadoComSalarioMaiorOuIgual1500 ? "Sim" : "Não"}`)

const temEmpregadoComSalarioMenorOuIgual1000 = empregados.some(empregado => empregado.salario <= 1000)
console.log(`Tem algum empregado com salário menor ou igual a R$1.000,00? ${temEmpregadoComSalarioMenorOuIgual1000 ? "Sim" : "Não"}`)