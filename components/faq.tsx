"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Можно ли адаптировать под мой бизнес?",
    answer:
      "Да, AI-чат полностью адаптируется под вашу специфику. Мы обучаем модель на ваших данных, настраиваем тон общения и интегрируем с вашими системами.",
  },
  {
    question: "Как происходит обучение?",
    answer:
      "Вы предоставляете нам информацию о компании (сайт, документы, FAQ), мы загружаем эти данные в систему, и AI изучает их. Процесс занимает от нескольких часов до 1-2 дней.",
  },
  {
    question: "Какие данные нужны?",
    answer:
      "Базово достаточно ссылки на ваш сайт. Для лучшего качества подойдут: описания услуг, прайс-листы, частые вопросы клиентов, презентации о компании.",
  },
  {
    question: "Можно ли тестировать бесплатно?",
    answer:
      "Да, мы предоставляем бесплатный тестовый период на 14 дней. Вы сможете оценить качество ответов и увидеть результаты на своем сайте.",
  },
  {
    question: "Как быстро можно запустить?",
    answer:
      "После предоставления данных запуск занимает 1-3 рабочих дня. Интеграция на сайт — буквально 10 минут через простой код.",
  },
  {
    question: "Что если AI не знает ответа?",
    answer:
      "В таких случаях чат предложит связаться с менеджером или оставить контакты. Все непонятные вопросы попадают вам в отчет для дообучения системы.",
  },
]

export function FAQ() {
  return (
    <section className="bg-muted/30 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-pretty text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Часто задаваемые вопросы
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">Ответы на популярные вопросы о нашем AI-чате</p>
        </div>

        <Accordion type="single" collapsible className="mb-12 space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="rounded-lg border border-border bg-card px-6">
              <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-pretty leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            У меня остались вопросы
          </Button>
        </div>
      </div>
    </section>
  )
}
