import { Outlet } from 'react-router'
import LandingNavBar from './LandingNavBar.tsx'

const LandingLayout = () => {
  return (
    <div className='min-h-screen w-screen dark:bg-background-dark bg-background-light dark flex flex-col overflow-x-hidden items-center'>
      <div className='w-full max-w-7xl p-8 md:p-12 flex-1 flex flex-col'>
        <LandingNavBar/>
        <main className='flex flex-col '>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default LandingLayout