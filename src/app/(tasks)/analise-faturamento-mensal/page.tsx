
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import * as jsonFile from '../../../../public/dados.json'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Eye } from 'lucide-react'


export default function Page() {

  const dados = Array.from(jsonFile)

  // const lowerValue = dados.reduce((acc, curr) => curr.valor < acc.valor ? curr : acc, dados[0] || undefined)
  const lowestPositiveValue = dados.reduce((acc, curr) => curr.valor < acc.valor && curr.valor > 0 ? curr : acc, dados[0] || undefined)
  const highValue = dados.reduce((acc, curr) => curr.valor > acc.valor ? curr : acc, dados[0] || undefined)
  const totalValue = dados.reduce((acc, curr) => acc + curr.valor, 0)
  const daysWithBillingAboveZero = dados.reduce((acc, curr) => curr.valor > 0 ? acc + 1 : acc, 0)

  const monthlyAverage = totalValue / daysWithBillingAboveZero

  const daysAboveMonthlyAverage = dados.reduce((acc, curr) => curr.valor > monthlyAverage ? acc + 1 : acc, 0)

  return (

    <div className='space-y-4'>

      <h2 className='font-bold text-xl py-2'>Análise de Faturamento Mensal</h2>

      <div className='[&_p]:font-semibold space-y-2'>
        <p>
          Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
          <br />
          • O menor valor de faturamento ocorrido em um dia do mês;
          <br />
          • O maior valor de faturamento ocorrido em um dia do mês;
          <br />
          • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
          <br />
          <br />
          IMPORTANTE:
          <br />
          a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
          <br />
          b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
        </p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <span className='flex gap-1.5 items-center'>
                <p>dados.json</p>
                <Eye size={16} />
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <SyntaxHighlighter language="typescript" style={dracula}>
                {JSON.stringify(dados, null, 2)}
              </SyntaxHighlighter>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>

      <div className='font-semibold'>

        <h3 className='text-lg'>Respostas</h3>

        <p>O menor valor de faturamento em um dia do mês foi: {lowestPositiveValue.valor} no dia {lowestPositiveValue.dia} (ignorando valores zerados)</p>
        <p>O maior valor de faturamento em um dia do mês foi: {highValue.valor} no dia {highValue.dia}</p>
        <p>O Número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi: {daysAboveMonthlyAverage}</p>

      </div>

    </div>
  )
}

