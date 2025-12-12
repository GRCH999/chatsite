import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCta() {
  return (
    <section className="bg-background py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="mb-6 text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Попробуйте AI-чат для вашего сайта уже сегодня
        </h2>

        <p className="mb-10 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Настраивается за 10 минут. Работает без выходных. Увеличивает продажи.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="group w-full sm:w-auto text-base px-8 py-6">
            Хочу попробовать
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8 py-6 bg-transparent">
            Связаться с менеджером
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span>Бесплатный тест 14 дней</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span>Настройка за 1 день</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span>Поддержка 24/7</span>
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-20 max-w-7xl border-t border-border px-6 pt-8 lg:px-8">
        <p className="text-center text-sm text-muted-foreground">© 2025 AI-чат. Все права защищены.</p>
      </footer>
    </section>
  )
}
