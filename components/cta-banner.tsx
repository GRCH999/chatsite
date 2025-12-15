import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <h2 className="text-balance text-center text-2xl font-bold text-primary-foreground sm:text-left sm:text-3xl lg:text-4xl">
            Готовы проверить, как AI увеличит вашу конверсию?
          </h2>
          <Button
            size="lg"
            variant="secondary"
            className="shrink-0 px-10 py-6 h-auto text-base rounded-xl bg-white text-primary hover:bg-white/90 shadow-xl hover:scale-105 transition-all"
          >
            Получить демо
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
    </section>
  )
}
