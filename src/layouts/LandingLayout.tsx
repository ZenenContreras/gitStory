import { Outlet } from 'react-router'
import LandingNavBar from './LandingNavBar.tsx'
import { useState } from 'react'
import LandingFooter from './LandingFooter.tsx'

const LandingLayout = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  return (
    <div className='min-h-screen w-full dark:bg-background-dark bg-background-light dark flex flex-col overflow-x-hidden items-center'>

      <header className='fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 dark:border-zinc-800/50 backdrop-blur-lg bg-background-light/80 dark:bg-background-dark/80'>

        <div className='w-full max-w-7xl mx-auto px-8 md:px-12 py-4'>
           <LandingNavBar setMenuIsOpen={setMenuIsOpen} menuIsOpen={menuIsOpen}/>
        </div>
        
      </header> 

      <main className='flex flex-col w-full max-w-7xl px-8 md:px-12 pt-24'>
        <Outlet />
      </main>

      <div className='w-full max-w-7xl px-8 md:px-12'>
        <LandingFooter />
      </div>

    </div>
  )
}

export default LandingLayout