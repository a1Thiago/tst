import tasks from '@/lib/tasks'
import { Link1Icon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='space-y-4'>

      <div className="bg-theme-primary/30 p-4 rounded-md shadow-sm text-gray-700">
        <h1 className='text-2xl font-bold mb-2 text-black'>Desafios Técnicos</h1>
        <p className='mb-2'>
          Bem-vindo! Aqui estão alguns dos desafios técnicos que resolvi como parte do processo seletivo da empresa Target Sistemas.
          Cada desafio aborda diferentes conceitos de lógica de programação, estrutura de dados e algoritmos.
        </p>
        <p>
          Fique à vontade para explorar e conferir as soluções que desenvolvi. Para mais detalhes, você pode ver o código-fonte do projeto no repositório do  <a href="https://github.com/a1Thiago/tst" target='_blank' className='underline font-medium text-blue-600'>GitHub</a>.
        </p>
      </div>

      <div>
        {tasks.map(task => {
          return (
            <Link key={task.url} href={`/${task.url}`} className='flex items-center space-x-1 underline font-medium hover:opacity-85 mb-0.5'>
              <p>{task.title}</p>
              <Link1Icon />
            </Link>
          )
        })}
      </div>

      <span className='sr-only' id="object-label">Currículo de Thiago Henrique</span>

      <object className='md:hidden' data="FS-ThiagoH.pdf" type="application/pdf" aria-labelledby="object-label" width='100%' height={300}>
        <p>Incapaz de exibir o PDF nesse dispositivo. <a className='underline font-semibold ' href="FS-ThiagoH.pdf">Click aqui</a> para visualizar.</p>
      </object>

      <object className='hidden md:flex' data="FS-ThiagoH.pdf" type="application/pdf" aria-labelledby="object-label" width='100%' height={900}>
        <p>Incapaz de exibir o PDF nesse dispositivo. <a className='underline font-semibold ' href="FS-ThiagoH.pdf">Click aqui</a> para visualizar.</p>
      </object>

    </div>
  )
}
