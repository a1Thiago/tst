import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='h-full space-y-4'>

      <div className='flex justify-end py-4'>
        <Link href='/desafio-1'>
          <Button className='flex gap-1'>
            <ChevronRight size={16} />
            <p>Desafio 1</p>
          </Button>
        </Link>
      </div>

      <object data="FS-ThiagoH.pdf" type="application/pdf" width="100%" height="90%">
        <p>Incapaz de exibir o PDF. <a href="FS-ThiagoH.pdf">Download</a> para visualizar.</p>
      </object>
    </div>
  )
}
