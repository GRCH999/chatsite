import { Button } from "@/components/ui/button"

export function MicroCta() {
  return (
    <section className="border-y border-border/50 bg-secondary/50 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-balance text-center text-base text-foreground sm:text-left sm:text-lg">
            Хотите проверить, как AI будет отвечать вашим клиентам?
          </p>
          <Button
            variant="default"
            className="shrink-0 rounded-lg bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25 transition-all"
          >
            Запросить тест
          </Button>
        </div>
      </div>
    </section>
  )
}
