"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SecurityNotice() {
  const [time, setTime] = useState("");
  const [timer, setTimer] = useState({ minutes: 4, seconds: 32 });

  useEffect(() => {
    setTime(new Date().toLocaleString("ru-RU", { hour12: false }));

    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev.minutes === 0 && prev.seconds === 0) return prev;
        const nextSeconds = prev.seconds === 0 ? 59 : prev.seconds - 1;
        const nextMinutes = prev.seconds === 0 ? prev.minutes - 1 : prev.minutes;
        return { minutes: nextMinutes, seconds: nextSeconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTimer = `${String(timer.minutes).padStart(2, "0")}:${String(timer.seconds).padStart(2, "0")}`;
  const isExpired = timer.minutes === 0 && timer.seconds === 0;

  return (
    <div className="min-h-screen gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 flex flex-col items-center">
      {/* HEADER */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl flex items-center justify-between px-6 pt-8"
      >
        <div className="flex items-center gap-3">
          <div className="w-41 h-28 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-md">
            <img src="/gosuslugi.png" alt="gosuslugi" className="w-62"/>
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-rose-600"><span className="text-blue-700">ГОС</span>УСЛУГИ</h1>
            <p className="text-sm text-slate-500">Центр безопасности</p>
          </div>
        </div>
      </motion.header>

      {/* MAIN CONTENT */}
      <motion.main
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-3xl px-6 py-8"
      >
        <div className="bg-white/80 backdrop-blur-md border border-slate-100 shadow-xl rounded-3xl p-8 space-y-8">
          {/* ALERT BADGE */}
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-rose-500 rounded-full animate-pulse" />
            <span className="px-4 py-1.5 text-sm font-semibold text-amber-800 bg-amber-50 border border-amber-100 rounded-full">
              Обнаружен подозрительный вход
            </span>
          </div>

          {/* TITLE & TEXT */}
          <div>
            <h2 className="text-3xl font-extrabold mb-2 text-slate-800">Срочное уведомление</h2>
            <p className="text-slate-600 leading-relaxed">
              Мы зафиксировали попытку входа в ваш аккаунт с нового устройства.  
              Чтобы сохранить безопасность данных, необходимо подтвердить личность.
            </p>
          </div>

          {/* DETAILS */}
          <div className="gradient-to-b from-white to-slate-50 border border-slate-100 rounded-2xl p-6 shadow-inner">
            <h3 className="text-lg font-bold mb-4">Детали события</h3>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-sm">
              <div className="flex">
                <dt className="w-36 text-slate-500">Время:</dt>
                <dd className="font-medium">{time}</dd>
              </div>
              <div className="flex">
                <dt className="w-36 text-slate-500">Местоположение:</dt>
                <dd className="font-medium">Днепр, Украина</dd>
              </div>
              <div className="flex">
                <dt className="w-36 text-slate-500">IP-адрес:</dt>
                <dd className="font-medium">176.107.*.*</dd>
              </div>
              <div className="flex">
                <dt className="w-36 text-slate-500">Устройство:</dt>
                <dd className="font-medium">Samsung Galaxy S21</dd>
              </div>
              <div className="flex">
                <dt className="w-36 text-slate-500">Статус:</dt>
                <dd>
                  <span className="inline-flex px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-700 border border-rose-200">
                    Критический
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          {/* ACTIONS */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-3">Рекомендуемые действия</h3>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700">
              <li>Свяжитесь с оператором службы поддержки.</li>
              <li>Подтвердите ваши данные для проверки безопасности.</li>
              <li>Измените пароль и включите двухфакторную аутентификацию.</li>
            </ol>
          </div>
        </div>
      </motion.main>

      {/* STICKY FOOTER */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="sticky h-60 bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t w-full border-slate-200 shadow-2xl"
      >
        <div className="max-w-3xl mx-auto px-6 py-4 flex flex-col md:justify-between gap-4">
          <div className="flex justify-between items-center">
            <div className="text-sm font-bold text-slate-700">Подтвердите личность в течение</div>
            <div
              className={`mt-1 inline-flex items-center px-3 py-2 rounded-lg font-bold text-sm tracking-wider ${
                isExpired
                  ? "bg-rose-600 text-white shadow-md"
                  : "bg-rose-100 text-rose-700 border border-rose-200"
              }`}
            >
              {formattedTimer}
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 ">
            <div className="text-xs text-slate-500">Телефон службы поддержки</div>
            <a
              href="tel:+79020455740"
              className="bg-stone-100 px-5 py-2 w-full text-center rounded-xl gradient-to-r from-sky-500 to-blue-600 font-semibold shadow-md hover:shadow-lg transition"
            >
              +7 (902) 045 57-40
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
