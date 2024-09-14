'use client'

import InputWithLabel from '@/components/InputWithLabel'
import { useState } from 'react'


export default function Page() {

  const [distance, setDistance] = useState(125)
  const [carVelocity, setCarVelocity] = useState(90)
  const [truckVelocity, setTruckVelocity] = useState(80)
  const [tolls, setTolls] = useState(3)

  const tollTime = 5 / 60

  const carAdditionalTollsTime = tolls * tollTime

  const carRideTime = distance / carVelocity
  const truckRideTime = distance / truckVelocity

  const carFinalTime = carRideTime + carAdditionalTollsTime

  return (

    <div className='space-y-4'>

      <h2 className='font-bold text-xl py-2'>Problema de Encontro entre Veículos</h2>

      <div className='[&_p]:font-semibold space-y-2'>
        <p>
          Dois veículos, um carro e um caminhão, saem respectivamente de cidades opostas pela mesma rodovia. O carro, de Ribeirão Preto em direção a Barretos, a uma velocidade constante de 90 km/h, e o caminhão, de Barretos em direção a Ribeirão Preto, a uma velocidade constante de 80 km/h. Quando eles se cruzarem no percurso, qual estará mais próximo da cidade de Ribeirão Preto?
          <br />
          a) Considerar a distância de 125km entre a cidade de Ribeirão Preto &lt;-&gt; Barretos.
          <br />
          b) Considerar 3 pedágios como obstáculo e que o carro leva 5 minutos a mais para passar em cada um deles, pois ele não possui dispositivo de cobrança de pedágio.
          <br />
          c)Explique como chegou no resultado.
        </p>
      </div>

      <div>

        <InputWithLabel
          id='distance' label='Distancia total entre os destinos (km)' type='number' value={distance}
          onChange={(e) => setDistance(Number(e.target.value))} min={0}
        />

        <InputWithLabel
          id='carVelocity' label='Velocidade do carro (km/h):' type='number'
          value={carVelocity} onChange={(e) => setCarVelocity(Number(e.target.value))} min={0}
        />

        <InputWithLabel
          id='truckVelocity' label='Velocidade do Caminhão (km/h):' type='number'
          value={truckVelocity} onChange={(e) => setTruckVelocity(Number(e.target.value))} min={0}
        />

        <InputWithLabel
          id='tolls' label='Número de pedágios:' type='number'
          value={tolls} onChange={(e) => setTolls(Number(e.target.value))} min={0}
        />

      </div>

      <div id='calc' className='font-medium'>
        <p>Duração do trajeto do carro: {formatTime(carFinalTime)}</p>
        <p>Duração do trajeto do caminhão: {formatTime(truckRideTime)}</p>
      </div>

      <div className=' py-2'>
        <h3 className='text-lg my-2 font-semibold'>Resposta para a pergunta com as velocidades e numero de pedágios padrão</h3>

        <p className='font-medium'>
          De acordo com a <a href="#calc">calculadora</a>, o carro levará aproximadamente {formatTime(carFinalTime)} para completar o percurso, enquanto o caminhão levará aproximadamente {formatTime(truckRideTime)}, considerando os {tolls} pedágios que o carro enfrenta.
          <br />
          Apesar desse calculo, no momento em que os dois veículos se cruzarem, ambos estarão no mesmo ponto da rodovia.
          <br />
          Portanto, a resposta final é que, quando se cruzarem, os dois estarão à mesma distância da cidade de Ribeirão Preto.
        </p>
      </div>


    </div>
  )
}

function formatTime(decimalTime: number) {
  const hours = Math.floor(decimalTime) // Parte inteira como horas
  const minutes = Math.round((decimalTime - hours) * 60) // Parte decimal convertida para minutos
  return `${hours}h ${minutes}min`
}