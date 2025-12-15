import { Hero } from "@/components/hero"
import { MicroCta } from "@/components/micro-cta"
import { Benefits } from "@/components/benefits"
import { Comparison } from "@/components/comparison"
import { HowItWorks } from "@/components/how-it-works"
import { CtaBanner } from "@/components/cta-banner"
import { FAQ } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <MicroCta />
      <Benefits />
      <Comparison />
      <HowItWorks />
      <CtaBanner />
      <FAQ />
      <FinalCta />
    </main>
  )
}
