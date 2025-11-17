"use client";

import { useState } from "react";

const cities = [
  "Москва",
  "Санкт-Петербург",
  "Новосибирск",
  "Екатеринбург",
  "Казань",
  "Нижний Новгород",
];

const deliveryPoints = ["Пункт выдачи", "Курьером до двери", "Почтомат"];

// Имитация расстояний между регионами
const REGION_DISTANCE: Record<string, number> = {
  Москва: 200,
  "Санкт-Петербург": 300,
  Новосибирск: 1800,
  Екатеринбург: 1400,
  Казань: 800,
  "Нижний Новгород": 500,
};

export function CostCalculator() {
  const [city, setCity] = useState("Москва");
  const [method, setMethod] = useState("Пункт выдачи");

  const [price, setPrice] = useState<number | null>(null);
  const [days, setDays] = useState<number | null>(null);

  const calculate = () => {
    const base = 250;
    const distance = REGION_DISTANCE[city] ?? 500;

    // Цена от расстояния
    const distancePrice = Math.round(distance * 0.12);

    // Коэффициенты метода получения
    const methodKoef = method === "Курьером до двери" ? 1.35 : 1;
    const result = Math.round((base + distancePrice) * methodKoef);

    // Примерный срок (чем дальше — тем дольше)
    const deliveryDays = Math.max(1, Math.round(distance / 600));

    setPrice(result);
    setDays(deliveryDays);
  };

  return (
    <section id="calculation" className="py-20 flex flex-col scroll-mt-[120px]">
      <h2 className="text-3xl font-bold mb-6">
        Срок и ориентировочная стоимость
      </h2>

      <div className="bg-white shadow-lg p-6 2xl:mx-40 rounded-xl justify-between flex gap-4">
        <div className="flex flex-col w-[50%] py-10 gap-4">
          <label className="flex flex-col gap-1 text-sm">
            Город доставки
            <select
              className="border p-2 rounded-md"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              {cities.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1 text-sm">
            Способ получения
            <select
              className="border p-2 rounded-md"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              {deliveryPoints.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
          </label>

          <button
            onClick={calculate}
            className="bg-stone-100 p-2 rounded-lg mt-2 hover:bg-stone-200 hover:cursor-pointer"
          >
            Рассчитать
          </button>
        </div>

        {price !== null && days !== null && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-3 text-sm">
            <p>
              <b>Срок доставки:</b> ≈ {days} дн.
            </p>
            <p>
              <b>Ориентировочная стоимость:</b> ≈ {price} ₽
            </p>
            <p className="text-gray-500 mt-1 text-xs">
              * расчёт является ориентировочным и не является публичной офертой
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
