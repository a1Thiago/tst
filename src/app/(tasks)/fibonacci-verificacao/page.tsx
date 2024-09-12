'use client'
import { Input } from '@/components/ui/input'
import { ChangeEvent, useState } from 'react'

export default function Page() {

  const [number, setNumber] = useState<number>(0)
  const [result, setResult] = useState<boolean>(true)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value))
    setResult(isInFibonacciSequence(+e.target.value))
  }

  return (

    <div className='space-y-4'>

      <h2 className='font-bold text-xl py-2'>Verificação na Sequência de Fibonacci</h2>

      <div className='[&_p]:font-semibold space-y-2'>
        <p>
          Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
          escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci
          e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
          IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
        </p>
      </div>

      <div>

        <div className="flex flex-col w-full max-w-sm">
          <label htmlFor="number-input" className="mb-2 text-sm font-medium text-gray-700">
            Número
          </label>
          <div className="flex items-center space-x-2">
            <Input className='py-6 outline outline-2 outline-theme-primary/50' id="number-input" type="number" placeholder="Número" onChange={handleChange} min={0} value={number} />
          </div>
        </div>

        <div className='font-semibold'>
          {result
            ? (
              <p className='text-green-700'>O número {number} pertence a sequência de Fibonacci</p>
            )
            : (
              <p className='text-red-700'>O número {number} não pertence a sequência de Fibonacci</p>
            )
          }
        </div>

      </div>
    </div>
  )
}


function isInFibonacciSequence(number: number) {

  if (number < 0) return false

  let a = 0
  let b = 1

  if (number === a || number === b) return true

  while (b < number) {
    const temp = a + b
    a = b
    b = temp
  }

  return b === number
}
