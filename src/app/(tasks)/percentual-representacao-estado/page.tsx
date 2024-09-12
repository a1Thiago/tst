import { Chart } from '@/components/ui/pie-chart'

export default function Page() {

  const states = [
    { name: "sp", value: 67836.43, color: "var(--color-sp)" },
    { name: "rj", value: 36678.66, color: "var(--color-rj)" },
    { name: "mg", value: 29229.88, color: "var(--color-mg)" },
    { name: "es", value: 27165.48, color: "var(--color-es)" },
    { name: "outros", value: 19849.53, color: "var(--color-outros)" }
  ]

  const total = states.reduce((acc, curr) => acc + curr.value, 0)

  const chartData = states.map(state => ({
    state: state.name,
    percentage: (state.value / total) * 100,
    fill: state.color
  }))


  return (

    <div className='space-y-4'>

      <h2 className='font-bold text-xl py-2'>Percentual de Representação por Estado</h2>

      <div className='[&_p]:font-semibold space-y-2'>
        <p>
          Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
          <br />
          • SP – R$67.836,43
          <br />
          • RJ – R$36.678,66
          <br />
          • MG – R$29.229,88
          <br />
          • ES – R$27.165,48
          <br />
          • Outros – R$19.849,53
          <br />
          Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
        </p>

      </div>

      <div className='font-semibold'>

        <h3 className='text-lg'>Resposta</h3>
        {
          chartData.map(data => {
            return (
              <div key={data.state}>
                <p>{data.state.toUpperCase()}: {data.percentage.toFixed(1) + '%'}</p>
              </div>
            )
          })
        }
        <Chart chartData={chartData} />
      </div>

    </div>
  )
}

