import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, Brain, TrendingUp, Users } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Работает 24/7 без выходных",
    description: "AI-чат никогда не спит и всегда готов помочь вашим клиентам в любое время суток.",
  },
  {
    icon: Brain,
    title: "Отвечает как эксперт: обучен вашим данным",
    description: "Система знает всю информацию о вашей компании и дает точные ответы.",
  },
  {
    icon: TrendingUp,
    title: "Повышает конверсию в заявку",
    description: "Мгновенные ответы увеличивают доверие клиентов и количество обращений.",
  },
  {
    icon: Users,
    title: "Снижает нагрузку на менеджеров",
    description: "AI берет на себя типовые вопросы, освобождая время вашей команды.",
  },
]

export function Benefits() {
  return (
    <section className="bg-secondary/30 py-28 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Преимущества AI-чата
          </h2>
          <p className="mt-6 text-pretty text-lg text-[#4A4A4A] sm:text-xl">
            Современное решение для автоматизации общения с клиентами
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 bg-card border-border/50 hover:border-primary/20"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 shadow-sm">
                <benefit.icon className="h-7 w-7 text-primary" strokeWidth={2} />
              </div>
              <h3 className="mb-4 text-xl font-bold text-card-foreground leading-snug">{benefit.title}</h3>
              <p className="text-pretty leading-relaxed text-[#4A4A4A]">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button
            size="lg"
            className="px-10 py-6 h-auto text-base rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            Хочу такой чат
          </Button>
        </div>
      </div>
    </section>
  )
}
