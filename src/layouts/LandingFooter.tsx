import { Terminal } from "lucide-react"

function LandingFooter() {
  return (
    <footer className='flex flex-wrap flex-row w-full mx-auto justify-between py-16 md:py-24 font-mono gap-5 '>

        <div className="flex items-center flex-row gap-2">
            <div className="text-primary bg-primary/10 p-1 rounded">
                <Terminal />
            </div>
            <h3 className="font-bold dark:text-secondary">Git<span className="text-primary">Story</span></h3>
        </div>

        <li className="flex md:flex-row gap-4 items-center dark:text-secondary ">
            <ul className="hover:text-primary transition-colors"><a href="">Privacy</a></ul>
            <ul className="hover:text-primary transition-colors"><a href="">Terms</a></ul>
            <ul className="hover:text-primary transition-colors"><a href="">Twitter</a></ul>
            <ul className="hover:text-primary transition-colors"><a href="">Github</a></ul>
        </li>

        <p className="dark:text-secondary">Build by <span className="text-primary">@zenencontreras</span>, for developers. © 2026 GitStory. </p>

    </footer>
  )
}

export default LandingFooter