import { type JSX } from "react"
import { GitBranch, PartyPopper,FolderGit2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger) 

interface steps{
    name: string;
    order: number;
    title: string;
    text: string;
    icon: JSX.Element;
}


const steps: steps[] = [

    {name: 'connect' ,order: 1 , title: 'Connect Your Github', text: 'Securly link yout repositories with one click OAuth integration', icon: <FolderGit2 size={36}/> },

    {name: 'pick' ,order: 2 , title: 'Pick a PR or Commit', text: 'Select any recent pull request or commit. Our AI analyses the code changes and context', icon: <GitBranch size={36}/> },

    {name: 'hired' , order: 3 , title: 'Copy, Paste, and get hired', text: 'Get a high-engagement post ready to share with your network.', icon: <PartyPopper size={36}/>}
]


function GrowSection() {
    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger: '#steps',
                start: 'top bottom',
                end: 'top 40%',
                scrub: 1,
            }
        })

        tl.from('#connect', {opacity: 0, y: 50 })
          .from('#pick', {opacity: 0, y: 50 })
          .from('#hired', {opacity: 0, y: 50 })
    }, [])

  return (
    <section className="flex flex-col items-center py-16 md:py-24">
        <h2 className="font-black  dark:text-slate-100 text-3xl md:text-4xl mb-8">How It Works</h2>
        <p className="font-mono dark:text-secondary text-center text-sm md:text-md mb-24">Transform your development workflow into a social growth engine in <span className="font-bold">three</span> simple steps</p>
        <div id='steps' className="flex flex-col md:flex-row  gap-18 md:gap-4">
            {steps.map((step)=> (
                <div id={step.name} key={step.order} className="flex flex-col items-center gap-5">
                    <div className="p-2 text-primary rounded-xl shadow shadow-primary bg-primary/20">
                        {step.icon}
                    </div>
                    <h2 className="font-semibold text-lg dark:text-slate-100">{step.order}. {step.title}</h2>
                    <p className="text-center text-secondary text-xs md:text-sm font-mono">{step.text}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default GrowSection