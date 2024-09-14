'use client'

import { Input } from '@/components/ui/input'
import { ChangeEvent, useState } from 'react'

export default function Page() {

  const [aCount, setACount] = useState<number>(0)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    const string = e.target.value.toLowerCase()

    const count = string.match(/a/g)?.length ?? 0

    setACount(count)
  }

  return (

    <div className='space-y-4'>

      <h2 className='font-bold text-xl py-2'>Contagem de Ocorrências da Letra &#34;A&#34;</h2>

      <div className='[&_p]:font-semibold space-y-2'>
        <p>
          Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
          <br />
          IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
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

      <p className='font-semibold text-lg'>Quantidade de letras &#34;A&#34;: {aCount}</p>

    </div>
  )
}
