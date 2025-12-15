import { Button } from "@/components/ui/button"
import { Upload, Settings, Globe, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Вы отдаёте информацию про бизнес",
    description: "Загружаете документы, ссылки на сайт и другие материалы о вашей компании.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Мы обучаем модель",
    description: "AI анализирует всю информацию и настраивается под специфику вашего бизнеса.",
  },
  {
    icon: Globe,
    number: "03",
    title: "Чат появляется на вашем сайте",
    description: "Простая интеграция через код — добавляется на любой сайт за минуты.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "AI обслуживает клиентов 24/7",
    description: "Система автоматически отвечает на вопросы и помогает посетителям.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-background py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Как это работает
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">Запуск AI-чата — простой процесс из 4 шагов</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-16 hidden h-0.5 w-full bg-border lg:block" />
              )}
              <div className="relative">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="mb-2 text-sm font-semibold text-muted-foreground">{step.number}</div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="px-8">
            Запустить для моего бизнеса
          </Button>
        </div>
      </div>
    </section>
  )
}
