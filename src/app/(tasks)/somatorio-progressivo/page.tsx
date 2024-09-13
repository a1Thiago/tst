import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'


export default function Page() {


  const desafio1 = `
  int INDICE = 13, SOMA = 0, K = 0;
  Enquanto K < INDICE faça {
    K = K + 1;
    SOMA = SOMA + K;
  }
  Imprimir(SOMA);`

  const desafio2 = `
  int INDICE = 12, SOMA = 0, K = 1;
  Enquanto K < INDICE faça {
    K = K + 1;
    SOMA = SOMA + K;
  }
  Imprimir(SOMA);`

  const resposta1 = `
//Resolução em javascript
let INDICE = 13
let SOMA = 0
let K = 0

while(K < INDICE){
  K = K + 1
  SOMA = SOMA + K
}

console.log(SOMA)

${cumulativeSum(13, 0, 0)}
`
  const resposta2 = `
//Resolução em javascript
let INDICE = 12
let SOMA = 0
let K = 1

while(K < INDICE){
  K = K + 1
  SOMA = SOMA + K
}

console.log(SOMA)

${cumulativeSum(12, 0, 1)}
`
  return (

    <div className='space-y-4'>

      <h2 className='font-bold text-xl'>Somatório Progressivo</h2>

      <div>

        <h3 className='font-bold text-lg'>Desafio 1</h3>

        <div className='[&_p]:font-semibold space-y-2'>

          <p>
            Observe o trecho de código abaixo:
            <br />
            {desafio1}
            <br />
            Ao final do processamento, qual será o valor da variável SOMA?
          </p>

          <SyntaxHighlighter language="javascript" style={dracula}>
            {resposta1}
          </SyntaxHighlighter>

        </div>


        <div>
          <p className='font-semibold py-2'>Resposta: {cumulativeSum(13, 0, 0)}</p>
        </div>


      </div>

      <div>

        <h3 className='font-bold text-lg'>Desafio 2</h3>

        <div className='[&_p]:font-semibold space-y-2'>

          <p>
            Observe o trecho de código abaixo:
            <br />
            {desafio2}
            <br />
            Ao final do processamento, qual será o valor da variável SOMA?
          </p>

          <SyntaxHighlighter language="javascript" style={dracula}>
            {resposta2}
          </SyntaxHighlighter>

        </div>


        <div>
          <p className='font-semibold py-2'>Resposta: {cumulativeSum(12, 0, 1)}</p>
        </div>


      </div>

    </div>
  )
}

function cumulativeSum(indice: number, soma: number, k: number) {

  while (k < indice) {
    k = k + 1
    soma = soma + k
  }

  return soma
}