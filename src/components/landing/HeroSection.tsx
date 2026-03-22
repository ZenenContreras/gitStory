import { CircleUserRound, CirclePlay, Sparkles, PencilLine, ThumbsUp, MessageCircle, Share2 } from 'lucide-react'

function HeroSection() {
    return (
        <div className="flex flex-col items-center gap-8 pb-16">
            <div className="flex justify-between items-center gap-2 bg-zinc-100 border-zinc-700 dark:bg-zinc-800 shadow-lg py-1 px-3 rounded-xl dark:text-zinc-200 dark:border-secondary font-mono">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-xs">v1.0 is now Live</p>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-center dark:text-background-light leading-tight">
                Your code tells a story. <br />
                <span className="bg-linear-to-r from-primary to-purple-500 inline-block text-transparent bg-clip-text">Let AI tell the world.</span>
            </h1>

            <p className="text-center dark:text-secondary md:text-lg font-mono">Turn cryptic <span className="font-mono text-primary bg-primary/10 px-1 py-0.5 rounded text-sm"> git commit</span> messages into viral LinkedIn updates in seconds. <br />Stop wasting time writing copy; start shipping.</p>

            <div className="flex flex-col md:flex-row gap-5">
                <button className="btn-primary text-sm md:text-md">
                    <CircleUserRound />
                    Connect Your Github
                </button>

                <button className='btn-primary bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc/90 text-zinc-900 dark:text-background-light  dark:shadow-zinc-900/90 border border-zinc-300 dark:border-zinc-600  text-sm md:text-md'>

                    <div className='text-black dark:text-white'>
                        <CirclePlay />
                    </div>
                    See Examples
                </button>
            </div>

            <section className='flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 w-full max-w-6xl px-4'>

                <div className='flex-1 rounded-xl bg-background-secondary border border-zinc-800 w-full shadow-2xl overflow-hidden'>
                    <div className='flex items-center gap-2 bg-zinc-900/50 px-4 py-3 border-b border-zinc-800'>
                        <div className='flex gap-1.5'>
                            <div className='h-3 w-3 rounded-full bg-[#ff5f56]'></div>
                            <div className='h-3 w-3 rounded-full bg-[#ffbd2e]'></div>
                            <div className='h-3 w-3 rounded-full bg-[#27c93f]'></div>
                        </div>
                        <span className='text-secondary text-xs font-mono ml-2 uppercase tracking-wide'>terminal — zsh</span>
                    </div>

                    <div className='p-6 font-mono text-sm space-y-5'>
                        <div className='space-y-2'>
                            <p className='text-zinc-400'>
                                <span className='text-primary font-bold'>→ project-x</span> <span className='text-purple-500'> git:(main)</span> <span className='text-zinc-100'>git commit -m "feat: added stripe integration for pro plans"</span>
                            </p>
                        </div>

                        <div className='text-zinc-500 space-y-1 opacity-80'>
                            <p>[main 8a2b9d1] feat: added stripe integration for pro plans</p>
                            <p>1 file changed, 45 insertions(+), 2 deletions(-)</p>
                        </div>

                        <div>
                            <p className='text-zinc-400'>
                                <span className='text-primary font-bold'>→ project-x</span> <span className='text-purple-500'> git:(main)</span> <span className='text-zinc-100'>git push origin main</span>
                            </p>
                        </div>

                        <hr className='text-secondary' />

                        <div className='pt-7 space-y-3'>
                            <p className='text-sm uppercase tracking-widest text-zinc-600 font-bold'>Metadata Detected</p>
                            <div className='flex flex-wrap gap-2 text-xs font-semibold'>

                                <span className='px-2 py-1 rounded-md bg-primary/10 border border-blue-500/20 text-primary  font-semibold'>feature</span>

                                <span className='px-2 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400  font-semibold'>stripe-api</span>

                                <span className='px-2 py-1 rounded-md bg-green-500/10 border border-green-500/20 text-green-400  font-semibold'>payments</span>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative flex items-center justify-center py-4 lg:py-0'>
                    <div className='absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse'></div>
                    <div className='relative text-primary border border-primary/40 p-3.5 rounded-full dark:bg-background-dark/80 shadow-[0_0_20px_rgba(61,132,245,0.3)] backdrop-blur-sm z-10'>
                        <Sparkles size={28} className="animate-spin-slow" />
                    </div>
                </div>

                <div className='flex-1 rounded-xl dark:bg-background-secondary border border-zinc-300 dark:border-zinc-800 w-full shadow-2xl overflow-hidden'>

                    <div className='flex justify-between items-center bg-zinc-100 dark:bg-zinc-900/50 px-4 py-3 border-b border-zinc-300 dark:border-zinc-800'>
                        <div className='flex items-center gap-2'>
                            <div className='p-1 bg-primary/20 rounded-md text-primary'><PencilLine size={14} /></div>
                            <span className='text-zinc-900 dark:text-zinc-100 text-xs  md:text-sm font-bold'>Generated Post Preview</span>
                        </div>

                        <button className='btn-primary py-2 px-2 text-[9px] md:text-xs font'>Post Now</button>
                    </div>

                    <div className='p-6 space-y-5'>

                        <div className='flex items-center gap-3'>

                            <div className='dark:text-secondary'>
                                <CircleUserRound size={40} />
                            </div>

                            <div>
                                <p className='dark:text-zinc-100 text-sm font-bold'>Alex Developer</p>
                                <p className='text-secondary dark:text-secondary/50 text-xs' >Senior Software Engineer • Just now</p>
                            </div>

                        </div>

                        <div className='space-y-4 text-sm'>
                            <p className='text-zinc-800 dark:text-zinc-100  leading-snug'>
                                🚀 <span className="font-bold">Big news!</span> We just shipped Pro Plans.
                            </p>
                            <p className='text-zinc-800 dark:text-secondary/80 leading-relaxed'>
                                Integrating Stripe was a journey, but it unlocks a whole new tier of features for our power users. It wasn't just about payments; it was about building a seamless upgrade experience.
                            </p>
                            <p className='text-zinc-800 dark:text-secondary/80'>Check out the new checkout flow! 👇</p>
                            <div className='flex flex-wrap gap-2 text-primary font-mono text-xs'>
                                <span>#Stripe</span> <span>#SaaS</span> <span>#WebDev</span> <span>#ShipIt</span>
                            </div>
                        </div>

                        <div className='flex justify-between pt-3 border-t border-zinc-800/50 text-zinc-500'>
                            <div className='flex gap-5 text-xs'>
                                <span className="flex items-center gap-1 hover:text-zinc-300 transition-colors"><ThumbsUp size={16} /> 42</span>
                                <span className="flex items-center gap-1 hover:text-zinc-300 transition-colors"><MessageCircle size={16} /> 12</span>
                            </div>
                            <button className='hover:text-primary transition-colors'><Share2 size={16} /></button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HeroSection