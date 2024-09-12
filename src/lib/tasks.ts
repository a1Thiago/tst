interface Task {
  url: string
  desc: string
}

const tasks: Task[] = [
  { url: 'somatorio-progressivo', desc: 'Somatório Progressivo' },
  { url: 'fibonacci-verificacao', desc: 'Verificação na Sequência de Fibonacci' },
  { url: 'analise-faturamento-diario', desc: 'Análise de Faturamento Diário' },
  { url: 'percentual-representacao-estado', desc: 'Percentual de Representação por Estado' },
  { url: 'inversao-string-manual', desc: 'Inversão de String Manual' },
  { url: 'contagem-letra-a', desc: 'Contagem de Ocorrências da Letra "A"' },
  { url: 'descubra-numero', desc: 'Descubra o Próximo Número' },
  { url: 'desafio-interruptores', desc: 'Desafio dos Interruptores' }
]

export default tasks
