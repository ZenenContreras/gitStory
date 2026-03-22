import {SquareChevronRight, CircleUserRound, Menu} from 'lucide-react'


function LandingNavBar() {
  return (
    <nav className="dark:text-white flex justify-between items-center">
      <div className='flex-1 flex gap-2 items-center'>
        <div className='p-1 bg-primary/10 rounded'>
          <SquareChevronRight color='#3d84f5' size={24}/>
        </div>
        <h2 className="text-lg md:text-2xl font-black">
          Git<span className='text-primary'>Story</span>
        </h2>
      </div>


      <ul className="hidden md:flex justify-center gap-8 font-mono items-center px-4 ">
        <li className='hover:text-primary transition-colors'> <a href="#how-it-works">How it Works</a></li>
        <li className='hover:text-primary transition-colors'><a href="#features">Features</a></li>
        <li className='hover:text-primary transition-colors'><a href="#pricing">Pricing</a></li>
      </ul>

      <div className='hidden flex-1 md:flex justify-end'>
        <button className="btn-primary md:text-xs lg:text-md">
          <CircleUserRound />
          Connect Your Github
        </button>
      </div>

      <div className='flex md:hidden'>
        <button className='text-primary'><Menu/></button>
      </div>
    </nav>
  )
}

export default LandingNavBar