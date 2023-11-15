const pessoas = [
  { nome: 'João', altura: 1.75, peso: 80 },
  { nome: 'Maria', altura: 1.68, peso: 60 },
  { nome: 'Pedro', altura: 1.80, peso: 70 },
  { nome: 'Ana', altura: 1.65, peso: 55 },
  { nome: 'Carlos', altura: 1.90, peso: 100 }
]

const calcularImc = (pessoas) => {
  pessoas.map(pessoa => {
    const imc = (pessoa.peso / (pessoa.altura * pessoa.altura)).toFixed(1)
    console.log(`O IMG de ${pessoa.nome} é ${imc}`)
  })
}

calcularImc(pessoas)