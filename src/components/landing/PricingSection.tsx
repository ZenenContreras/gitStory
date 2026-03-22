import {CircleCheck} from 'lucide-react'

function PricingSection() {
  return (
    <section className="flex flex-col items-center py-16 md:py-24 w-full">
            <h2 className=" text-center font-black  dark:text-slate-100 text-3xl md:text-4xl mb-8"> Simple, Transparent Pricing</h2>
            <p className="font-mono dark:text-secondary text-center text-sm md:text-md mb-24">Choose the plan that <span className="font-bold">fits</span> your shipping frequency.</p> 

            <div className="flex justify-center flex-col lg:flex-row w-full gap-10">
                 <div className="p-8 rounded-xl flex flex-col justify-start dark:shadow-zinc-900/90 border border-zinc-300 dark:border-zinc-600 gap-3 shadow-2xl overflow-hidden flex-1">
                    <h2 className="dark:text-slate-100 font-black text-2xl">Hobby</h2>
                    <h3 className="font-black dark:text-slate-100 text-3xl">$0 <span className='text-xs text-secondary'>/mo</span></h3>
                    <p className="dark:text-secondary text-xs mb-6">Perfect for individual developers building in public</p>
                    <div className="flex flex-col gap-5 text-sm dark:text-slate-100 font-mono mb-6">
                        <ul className='flex gap-2 items-center'><CircleCheck  color='#3d84f5'/> 3 Post per week</ul>
                        <ul className='flex gap-2 items-center'><CircleCheck  color='#3d84f5'/>Standard AI (GPT-4o-mini)</ul>
                        <ul className='flex gap-2 items-center'><CircleCheck  color='#3d84f5'/>Professional tone</ul>
                        <ul className='flex gap-2 items-center'><CircleCheck  color='#3d84f5'/>Manual copy-paste-flow</ul>
                        <ul className='flex gap-2 items-center'><CircleCheck  color='#3d84f5'/>1 commit at a time</ul>
                    </div>
                    <button className="btn-primary bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc/90 text-zinc-900 dark:text-background-light  dark:shadow-zinc-900/90 border border-zinc-300 dark:border-zinc-600  text-sm md:text-md'">Get Started</button>
                </div>

                 <div className="p-8 rounded-xl flex flex-col justify-start border border-primary dark:bg-zinc-900 gap-3 overflow-hidden flex-1 relative shadow-lg shadow-primary">
                    <span className='absolute font-bold top-0 right-0 font-mono text-slate-100 bg-primary rounded text-xs py-1 px-2'> MOST POPULAR</span>
                    <h2 className="dark:text-slate-100 font-black text-2xl">Pro</h2>
                    <h3 className="font-black dark:text-slate-100 text-3xl">$9.99 <span className='text-xs text-secondary'>/mo</span></h3>
                    <p className="dark:text-secondary text-xs mb-6">For users who want to maximize their career potential </p>
                    <div className="flex flex-col gap-5 text-sm dark:text-slate-100 font-mono mb-6">
                        <ul className='flex gap-2 items-center'><CircleCheck  color='#3d84f5'/>Unlimited posts</ul>
                        <ul className='flex gap-2 items-center'><CircleCheck  color='#3d84f5'/>Advanced Technical Reasoning AI</ul>
                        <ul className='flex gap-2 items-center'><CircleCheck  color='#3d84f5'/>Multiple custom tones</ul>
                        <ul className='flex gap-2 items-center'><CircleCheck  color='#3d84f5'/>Direct/Schedule LinkedIn posting</ul>
                        <ul className='flex gap-2 items-center'><CircleCheck  color='#3d84f5'/>Group multiple commits (Full PRs)</ul>
                    </div>
                    <button className="btn-primary">Go Pro Now</button>
                </div>
            </div>          
    </section>
  )
}

export default PricingSection