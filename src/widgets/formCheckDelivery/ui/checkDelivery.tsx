"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TrackingHero() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    if (!phone.trim()) return alert("Введите номер телефона");

    await fetch("/api/save-phone", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });

    router.push(`/error`);
  };

  return (
    <section id="track" className="w-full py-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] leading-tight">
            Доставка по всей России
          </h1>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-xl">
            Проверяйте статус посылки по номеру телефона или номеру заказа,
            меняйте адрес доставки и получайте уведомления от курьера — без
            личного кабинета.
          </p>
        </div>

        <div className="mt-10 bg-white shadow-xl rounded-2xl p-6 md:p-8 w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-semibold">Онлайн-отслеживание</h3>
              <p className="text-sm text-gray-500">
                Мгновенный статус обработки и доставки
              </p>
            </div>

            <span className="text-xs font-semibold bg-green-500 text-white px-2 py-1 rounded-md">
              LIVE
            </span>
          </div>

          <div className="flex mb-4">
            <input
              type="text"
              placeholder="+7 900 000-00-00"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border rounded-l-lg w-full px-4 py-3 focus:outline-blue-500"
            />
            <button
              onClick={handleSubmit}
              className="bg-stone-100 px-5 rounded-r-lg hover:bg-stone-200 hover:cursor-pointer transition"
            >
              Отследить
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setPhone("+7 900 123-45-67")}
              className="px-3 py-1 bg-stone-100 text-sm rounded-md"
            >
              +7 900 123-45-67
            </button>

            <button
              onClick={() => setPhone("RR123456789RU")}
              className="px-3 py-1 bg-stone-100 text-sm rounded-md"
            >
              RR123456789RU
            </button>
          </div>

          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input type="checkbox" className="mt-1" />
            Я даю согласие на обработку персональных данных.
          </label>
        </div>
      </div>
    </section>
  );
}
