"use client"

import { LabelList, Pie, PieChart } from "recharts"

type ChartData = {
  state: string
  percentage: number
  fill: string
}[]

type Props = {
  chartData: ChartData
}

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  percentage: {
    label: "Porcentagem: ",
  },
  sp: {
    label: "SP",
    color: "hsl(var(--chart-1))",
  },
  rj: {
    label: "RJ",
    color: "hsl(var(--chart-2))",
  },
  mg: {
    label: "MG",
    color: "hsl(var(--chart-3))",
  },
  es: {
    label: "ES",
    color: "hsl(var(--chart-4))",
  },
  outros: {
    label: "Outros",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function Chart({ chartData }: Props) {
  return (

    <ChartContainer
      config={chartConfig}
      className="aspect-square max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip
          content={<ChartTooltipContent nameKey="percentage" hideLabel />}
        />
        <Pie data={chartData} dataKey="percentage">
          <LabelList
            dataKey="state"
            className="fill-background"
            stroke="none"
            fontSize={12}
            formatter={(value: keyof typeof chartConfig) =>
              chartConfig[value]?.label
            }
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  )
}
