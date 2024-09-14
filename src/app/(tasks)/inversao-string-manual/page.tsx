'use client'

import { Input } from '@/components/ui/input'
import { ChangeEvent, useState } from 'react'

export default function Page() {

  const [reversedString, setReversedString] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReversedString(reverseString(e.target.value))
  }

  return (

    <div className='space-y-4'>

      <h2 className='font-bold text-xl py-2'>Inversão de String Manual</h2>

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
            <Input className='py-6 outline outline-2 outline-theme-primary/20' id="string-input" type="text" placeholder="String" onChange={handleChange} />
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