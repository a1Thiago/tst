import { Button } from '@/components/ui/button'
import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'


export default function Page() {


  const desafio = `
  int INDICE = 13, SOMA = 0, K = 0;
  Enquanto K < INDICE faça {
    K = K + 1;
    SOMA = SOMA + K;
  }
  Imprimir(SOMA);`

  const resposta = `
let INDICE = 13
let SOMA = 0
let K = 0

while(K < INDICE){
  K = K + 1
  SOMA = SOMA + K
}

console.log(SOMA)

91
`

  return (

    <div >

      <div className='flex justify-between py-4'>
        <Link href='/'>
          <Button className='flex gap-1'>
            <Home size={16} />
            <p>Início</p>
          </Button>
        </Link>

        <Link href='/desafio-2'>
          <Button className='flex gap-1'>
            <ChevronRight size={16} />
            <p>Desafio 2</p>
          </Button>
        </Link>
      </div>

      <h2 className='font-bold text-xl py-2'>Desafio 1</h2>

      <div className='[&_p]:font-semibold space-y-2'>

        <p>
          Observe o trecho de código abaixo:
        </p>
        <SyntaxHighlighter language="javascript" style={dracula}>
          {desafio}
        </SyntaxHighlighter>
        <p>
          Ao final do processamento, qual será o valor da variável SOMA?
        </p>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {resposta}
        </SyntaxHighlighter>

      </div>


      <div>
        <p className='font-semibold py-2'>Resposta: 91</p>
      </div>

    </div>
  )
}
