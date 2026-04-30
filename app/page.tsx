import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { WhyFails } from '@/components/sections/WhyFails'
import { ThreePillars } from '@/components/sections/ThreePillars'
import { CareerPortal } from '@/components/sections/CareerPortal'
import { EmployerBranding } from '@/components/sections/EmployerBranding'
import { Campaigns } from '@/components/sections/Campaigns'
import { Pricing } from '@/components/sections/Pricing'
import { Process } from '@/components/sections/Process'
import { WhyUs } from '@/components/sections/WhyUs'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <WhyFails />
      <ThreePillars />
      <CareerPortal />
      <EmployerBranding />
      <Campaigns />
      <Pricing />
      <Process />
      <WhyUs />
      <FinalCTA />
    </main>
  )
}
