'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

type LampState = 'off' | 'warm' | 'on'

export default function Page() {

  const [switches, setSwitches] = useState<boolean[]>([false, false, false])
  const [lampStates, setLampStates] = useState<LampState[]>(['off', 'off', 'off'])
  const [previousSwitch, setPreviousSwitch] = useState<number>(-1)

  const toggleSwitch = (switchNumber: number) => {
    setSwitches((prev) => {
      const newSwitches = prev.map((state, index) =>
        index === switchNumber - 1 ? !state : state
      )

      if (!newSwitches[switchNumber - 1]) {
        setPreviousSwitch(switchNumber - 1)
      }
      return newSwitches
    })
  }

  const checkLights = () => {
    const updatedLampStates = switches.map((switched, index) => {
      if (switched) return 'on'
      if (previousSwitch === index) return 'warm'
      return 'off'
    })
    setLampStates(updatedLampStates)
  }

  return (
    <div className="space-y-4">

      <h2 className="font-bold text-xl">Desafio dos Interruptores</h2>

      <div>
        <p>
          Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?
        </p>
      </div>

      <div className='grid'>
        <h3 className="font-semibold text-lg">Interruptores:</h3>
        <div className="flex gap-2">
          <div className='grid sm:grid-cols-3 gap-2'>
            {switches.map((state, index) => (
              <Button key={index} onClick={() => toggleSwitch(index + 1)}
                className={`px-4 py-2 bg-blue-500 text-white shadow transition-all duration-500 ${state && "shadow-yellow-500"}`}>
                Interruptor {index + 1} {state ? 'Ligado' : 'Desligado'}
              </Button>
            ))}
          </div>
          <Button onClick={checkLights} className="px-4 py-2 bg-green-500 text-white">
            Verificar Lâmpadas
          </Button>
        </div>
      </div>
      <div className="grid">
        <div>
          <h3 className="font-semibold text-lg">Lâmpadas:</h3>
        </div>
        <div className='grid grid-cols-3 gap-2'>
          {lampStates.map((state, index) => (
            <div key={index} className={`size-24 mx-auto rounded-full ${getLampClass(state)} transition-all duration-500`}>
              <p className="text-center text-white pt-10">{`Lâmpada ${index + 1}`}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="font-semibold">
        <h3>Resposta:</h3>
        <p>
          Ligue o primeiro interruptor e deixe-o ligado por alguns minutos. Depois, desligue o primeiro interruptor e ligue o segundo interruptor. Vá até as salas das lâmpadas.
        </p>
        <ul>
          <li>A lâmpada que está acesa: Está conectada ao interruptor atualmente <span className='bg-yellow-500 px-1 rounded'>ligado</span>.</li>
          <li>A lâmpada que está <span className='bg-orange-400 px-1 rounded'>apagada e quente</span>: Estava conectada ao último interruptor que você desligou.</li>
          <li>A lâmpada que está <span className='bg-gray-300 px-1 rounded'>apagada e fria</span>: Está conectada ao interruptor que você não ligou.</li>
        </ul>
      </div>
    </div>
  )
}

function getLampClass(state: LampState) {
  switch (state) {
    case 'on':
      return 'bg-yellow-500'
    case 'warm':
      return 'bg-orange-400'
    default:
      return 'bg-gray-300'
  }
}