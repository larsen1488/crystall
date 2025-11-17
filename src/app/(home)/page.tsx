import Header from "@/widgets/header/ui/Header";
import { Layout } from "@/shared/ui";
import TrackingHero from "@/widgets/formCheckDelivery/ui/checkDelivery";
import { HowItWorksCard } from "@/widgets/howItWork";
import { CheckCircle, Handshake, Package, Send } from "lucide-react";
import { CostCalculator } from "@/widgets/costCalculator";
import { FaqItem } from "@/widgets/FaqItem";
import Footer from "@/widgets/Footer";

const FAQ = [
  {
    question: "Мне не пришла смс от курьера. Что делать?",
    answer:
      "Сначала проверьте статус по номеру телефона — возможно, заказ ещё в сортировочном центре и не передан на доставку. Если статус «к курьеру», но больше 3 часов нет связи — напишите в поддержку, мы уточним интервал вручную.",
  },
  {
    question: "Можно ли получить посылку за другого человека?",
    answer:
      "В пункте выдачи — да, если у вас есть код получения из смс. Для курьерской доставки иногда требуется паспорт получателя, если заказ с постоплатой (наложенный платеж).",
  },
  {
    question: "Посылка повреждена. Куда обращаться?",
    answer:
      "Зафиксируйте повреждения на фото/видео при получении и сразу сообщите оператору пункта выдачи или курьеру. Мы оформим акт и запустим процедуру компенсации в рамках объявленной ценности отправления.",
  },
  {
    question: "Сколько хранится посылка в пункте выдачи?",
    answer:
      "Стандартно — до 5 календарных дней бесплатно. Потом посылка может быть отправлена обратно отправителю, но мы можем продлить хранение, если вы заранее предупредите поддержку.",
  },
];

export default function Home() {
  return (
    <main className="pt-[100px]">
      <Header />
      <Layout>
        <TrackingHero />
        <section id="how-it-works" className="w-full py-20 scroll-mt-[120px]">
          <h2 className="text-3xl font-bold mb-8 text-left">
            Как работает доставка
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">
            <HowItWorksCard
              icon={<Package />}
              title="Приём посылки"
              description="Регистрируем отправляем и присваиваем уникальный номер."
            />
            <HowItWorksCard
              icon={<Send />}
              title="Маршрут и сортировка"
              description="Посылка перемещается между распределительными центрами."
            />
            <HowItWorksCard
              icon={<Handshake />}
              title="Выдача"
              description="Хранение до 5 дней или доставка курьером до двери."
            />
            <HowItWorksCard
              icon={<CheckCircle />}
              title="Подтверждение вручения"
              description="Фиксируем факт вручения."
            />
          </div>
        </section>
        <CostCalculator />
        <section className="w-full py-20">
          <h2 className="text-3xl font-bold mb-4">Частые вопросы</h2>

          <p className="text-gray-600 mb-10 max-w-xl">
            Если ответа нет ниже — напишите нам, оператор ответит в среднем за
            несколько минут.
          </p>

          <div className="flex flex-col gap-4 max-w-full">
            {FAQ.map((f) => (
              <FaqItem
                key={f.question}
                question={f.question}
                answer={f.answer}
              />
            ))}
          </div>
        </section>
        <Footer />
      </Layout>
    </main>
  );
}
