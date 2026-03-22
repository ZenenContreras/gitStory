import { type JSX } from "react"
import { GitBranch, PartyPopper,FolderGit2 } from "lucide-react";

interface steps{
    order: number;
    title: string;
    text: string;
    icon: JSX.Element;
}


const steps: steps[] = [
    {order: 1 , title: 'Connect Your Github', text: 'Securly link yout repositories with one click OAuth integration', icon: <FolderGit2 size={36}/> },
    {order: 2 , title: 'Pick a PR or Commit', text: 'Select any recent pull request or commit. Our AI analyses the code changes and context', icon: <GitBranch size={36}/> },
    {order: 3 , title: 'Copy, Paste, and get hired', text: 'Get a high-engagement post ready to share with your network.', icon: <PartyPopper size={36}/>}
]


function GrowSection() {
  return (
    <section className="flex flex-col items-center py-16 md:py-24">
        <h2 className="font-black  dark:text-slate-100 text-5xl md:text-6xl mb-8">How It Works</h2>
        <p className="font-mono dark:text-secondary text-center text-sm md:text-md mb-24">Transform your development workflow into a social growth engine in <span className="font-bold">three</span> simple steps</p>
        <div className="flex flex-col md:flex-row  gap-18 md:gap-4">
            {steps.map((step)=> (
                <div key={step.order} className="flex flex-col items-center gap-5">
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