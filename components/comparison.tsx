import { Button } from "@/components/ui/button"
import { X, Check } from "lucide-react"

const oldChatbots = [
  "работают по заготовленным скриптам",
  "не понимают смысл вопроса",
  "переводят диалог в тупик",
  "не решают проблему клиента",
  "собирают контакты вместо ответа",
]

const aiChat = [
  "понимает естественный язык",
  "обучается данным бизнеса",
  "даёт точные ответы на реальные вопросы",
  "решает проблему клиента сразу",
  "повышает конверсию в заявку",
]

export function Comparison() {
  return (
    <section className="bg-gradient-to-b from-background via-primary/[0.02] to-background py-28 sm:py-36 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-24">
          <h2 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Почему наш AI-чат лучше обычных чат-ботов
          </h2>
        </div>

        <div className="relative">
          {/* Divider line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-0">
            {/* Old chatbots column */}
            <div className="lg:pr-10">
              <div className="rounded-2xl border border-border/50 bg-muted/40 p-10 shadow-sm">
                <h3 className="mb-10 text-3xl font-bold text-[#4A4A4A]">Обычные чат-боты</h3>
                <ul className="space-y-6">
                  {oldChatbots.map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/15">
                        <X className="h-4 w-4 text-destructive" strokeWidth={2.5} />
                      </div>
                      <span className="text-lg leading-relaxed text-[#4A4A4A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AI chat column */}
            <div className="lg:pl-10">
              <div className="rounded-2xl border-2 border-primary/30 bg-card p-10 shadow-xl shadow-primary/10">
                <h3 className="mb-10 text-3xl font-bold text-primary">Наш AI-чат</h3>
                <ul className="space-y-6">
                  {aiChat.map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 shadow-sm">
                        <Check className="h-4 w-4 text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-lg leading-relaxed text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Button
            size="lg"
            className="px-10 py-7 h-auto text-base rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            Попробовать сейчас в бесплатном режиме
          </Button>
        </div>
      </div>
    </section>
  )
}
