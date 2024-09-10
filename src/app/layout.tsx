import type { Metadata } from "next"
import localFont from "next/font/local"
import Link from 'next/link'
import TSLogo from '../components/TSLogo'
import "./globals.css"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger
} from "@/components/ui/menubar"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Desafio Target Sistemas",
  description: "Criado com NextJS",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body style={{ minHeight: '100dvh' }} className={'grid grid-rows-[auto_1fr_auto] min-h-screen bg-white  text-black'}>

        <header className='py-2 text-black border-b-[1px] border-b-theme-grey/30'>

          <div className='mx-auto max-w-screen-xl px-4 md:px-8 flex'>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className='cursor-pointer'>Desafios</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Link href={'/desafio-1'}>
                      Desafio 1
                    </Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Link href={'/desafio-2'}>
                      Desafio 2
                    </Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Link href={'/desafio-3'}>
                      Desafio 3
                    </Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Link href={'/desafio-4'}>
                      Desafio 4
                    </Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Link href={'/desafio-5'}>
                      Desafio 5
                    </Link>
                  </MenubarItem>
                  <MenubarSeparator />
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>

          <div className='mx-auto max-w-screen-xl py-4 px-4 md:px-8 flex'>
            <Link className='flex space-x-2 hover:opacity-90' href='/'>
              <TSLogo height={75} />
            </Link>
          </div>

        </header>

        <main className='mx-auto max-w-screen-xl py-4 px-4 md:px-8 w-full'>
          {children}
        </main>

        <footer className="p-2 w-full bg-theme-grey text-white">
          <div className="w-full grid grid-rows-1 space-y-2 text-center items-center justify-center md:flex">
            <p>Feito com  ❤  por
              <a target='_blank' rel="noopener" href='https://github.com/a1Thiago'>
                <span> <span className='underline font-semibold'>a1Th</span> </span>
              </a>
            </p>
          </div>
        </footer>

      </body>
    </html>
  )
}
