'use client'

import InputWithLabel from '@/components/InputWithLabel'
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
        <InputWithLabel id='string-input' label='String' placeholder="String" onChange={handleChange} />
      </div>

      <p className='font-semibold text-lg'>Quantidade de letras &#34;A&#34;: {aCount}</p>

    </div>
  )
}
