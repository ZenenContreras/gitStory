import GrowSection from '../components/landing/GrowSection.tsx'
import HeroSection from '../components/landing/HeroSection'
import PricingSection from '../components/landing/PricingSection.tsx'
import ToolsSection from '../components/landing/ToolsSection.tsx'

function LandingPage() {
  return (
    <div className='flex flex-col mb-24'>
        <HeroSection />
        <ToolsSection />
        <GrowSection />
        <PricingSection />
    </div>
  )
}

export default LandingPage