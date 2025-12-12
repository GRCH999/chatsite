import { Button } from "@/components/ui/button"
import { MessageSquare, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/[0.02] to-background py-28 sm:py-36 lg:py-52">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary shadow-sm">
            <MessageSquare className="h-4 w-4" />
            <span>Умный AI-помощник для вашего бизнеса</span>
          </div>

          <h1 className="mb-10 text-balance text-6xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            Умный AI-чат для вашего сайта
          </h1>

          <p className="mb-14 text-balance text-xl leading-relaxed text-[#4A4A4A] sm:text-2xl">
            Помощник, обученный вашему бизнесу. Быстрые ответы → выше конверсия → больше продаж.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base px-10 py-7 h-auto rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Попробовать демо
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base px-10 py-7 h-auto rounded-xl border-2 border-border hover:border-primary/30 hover:bg-primary/5 transition-all bg-transparent"
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 top-0 -z-10 h-full overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]" />
        </div>
      </div>
    </section>
  )
}
