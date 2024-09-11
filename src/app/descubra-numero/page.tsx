

export default function Page() {

  return (

    <div className='space-y-4'>

      <h2 className='font-bold text-xl py-2'>Descubra o Próximo Número</h2>

      <div className='[&_p]:font-semibold space-y-2'>
        <p>
          Descubra a lógica e complete o próximo elemento:
          <br />
          a) 1, 3, 5, 7, ___
          <br />
          b) 2, 4, 8, 16, 32, 64, ____
          <br />
          c) 0, 1, 4, 9, 16, 25, 36, ____
          <br />
          d) 4, 16, 36, 64, ____
          <br />
          e) 1, 1, 2, 3, 5, 8, ____
          <br />
          f) 2,10, 12, 16, 17, 18, 19, ____
        </p>
      </div>

      <div className='font-semibold [&_span]:text-gray-400 [&_span]:ml-2'>
        <h3 className='text-lg'>Respostas</h3>
        <p>a) 1, 3, 5, 7, 9  <span >+2</span></p>
        <p>b) 2, 4, 8, 16, 32, 64, 128 <span >*2</span></p>
        <p>c) 0, 1, 4, 9, 16, 25, 36, 49 <span >...6², 7²</span></p>
        <p>d) 4, 16, 36, 64, 100 <span >2²,...8², 10²</span></p>
        <p>e) 1, 1, 2, 3, 5, 8, 13 <span >Fibonacci</span></p>
        <p>f) 2,10, 12, 16, 17, 18, 19, 200? <span >D?</span></p>
      </div>

    </div>
  )
}

