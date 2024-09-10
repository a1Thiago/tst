'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'

export default function Page() {

  const [reversedString, setReversedString] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReversedString(reverseString(e.target.value))
  }

  return (

    <div className='space-y-4'>

      <div className='flex justify-between py-4'>
        <Link href='/desafio-4'>
          <Button className='flex gap-1'>
            <ChevronLeft size={16} />
            <p>Desafio 4</p>
          </Button>
        </Link>
      </div>

      <h2 className='font-bold text-xl py-2'>Desafio 5</h2>

      <div className='[&_p]:font-semibold space-y-2'>
        <p>
          Escreva um programa que inverta os caracteres de um string.
          <br />
          IMPORTANTE:
          <br />
          a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
          <br />
          b) Evite usar funções prontas, como, por exemplo, reverse;
        </p>

      </div>

      <div className='font-semibold'>

        <div className="flex flex-col w-full max-w-sm">
          <label htmlFor="string-input" className="mb-2 text-sm font-medium text-gray-700">
            String
          </label>
          <div className="flex items-center space-x-2">
            <Input className='py-6 outline outline-2 outline-theme-primary/50' id="string-input" type="text" placeholder="String" onChange={handleChange} />
          </div>
        </div>
      </div>

      <p className='font-semibold text-lg'>{reversedString}</p>

    </div>
  )
}

function reverseString(input: string): string {
  let reversed = ''
  for (let i = input.length - 1; i >= 0; i--) {
    reversed += input[i]
  }
  return reversed
}