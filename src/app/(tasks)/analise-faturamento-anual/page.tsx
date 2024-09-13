
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Eye } from 'lucide-react'


export default function Page() {

  const annualRevenue = generateDailyRevenue(365)

  const nonZeroRevenue = annualRevenue.filter(item => item.valor > 0)

  const lowestPositiveValue =
    nonZeroRevenue.reduce((acc, curr) => curr.valor < acc.valor ? curr : acc, nonZeroRevenue[0])

  const highValue = annualRevenue.reduce((acc, curr) => curr.valor > acc.valor ? curr : acc, annualRevenue[0] || undefined)
  const totalValue = annualRevenue.reduce((acc, curr) => acc + curr.valor, 0)
  const daysWithBillingAboveZero = nonZeroRevenue.length

  const yearAverage = parseFloat((totalValue / daysWithBillingAboveZero).toFixed(2))

  const daysAboveYearAverage = annualRevenue.reduce((acc, curr) => curr.valor > yearAverage ? acc + 1 : acc, 0)

  return (

    <div className='space-y-4'>

      <h2 className='font-bold text-xl py-2'>Análise de Faturamento Anual</h2>

      <div className='[&_p]:font-semibold space-y-2'>
        <p>
          Dado um vetor que guarda o valor de faturamento diário de uma distribuidora de todos os dias de um ano, faça um programa, na linguagem que desejar, que calcule e retorne:
          <br />
          - O menor valor de faturamento ocorrido em um dia do ano;
          <br />
          - O maior valor de faturamento ocorrido em um dia do ano;
          <br />
          - Número de dias no ano em que o valor de faturamento diário foi superior à média anual.
          <br />
          a) Considerar o vetor já carregado com as informações de valor de faturamento.
          <br />
          b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média.
          <br />
          c) Utilize o algoritmo mais veloz que puder definir.
        </p>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <span className='flex gap-1.5 items-center'>
                <p>Faturamento anual</p>
                <Eye size={16} />
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <SyntaxHighlighter language="typescript" style={dracula}>
                {JSON.stringify(annualRevenue, null, 2)}
              </SyntaxHighlighter>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>

      <div className='font-semibold'>

        <h3 className='text-lg'>Respostas</h3>

        <p>O menor valor de faturamento em um dia do ano foi: {formatToBRL(lowestPositiveValue.valor)} no dia {lowestPositiveValue.dia} (ignorando valores zerados)</p>
        <p>O maior valor de faturamento em um dia do ano foi: {formatToBRL(highValue.valor)} no dia {highValue.dia}</p>
        <p>O Número de dias no ano em que o valor de faturamento diário foi superior à média anual de {formatToBRL(yearAverage)} foi: {daysAboveYearAverage}</p>

      </div>

    </div>
  )
}


function generateDailyRevenue(days: number) {
  const dailyRevenue = []
  for (let i = 1; i <= days; i++) {
    const value = Math.random() > 0.1 ? parseFloat((Math.random() * 100000).toFixed(2)) : 0
    dailyRevenue.push({
      dia: i,
      valor: value
    })
  }
  return dailyRevenue
}

export function formatToBRL(value: number) {
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}