export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-semibold text-lg mb-3">Кристалл доставка</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Информационный сервис доставки по территории РФ. Мы отслеживаем
            статус посылок, координируем курьеров и помогаем получателям.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Персональные данные</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Мы используем номер телефона только для идентификации статуса
            отправления. Запрос сведений обрабатывается в соответствии с
            законодательством РФ о защите персональных данных.
          </p>
        </div>
      </div>

      <div className="text-center py-4 text-sm text-gray-500">
        © 2025 Кристалл доставка. Все права защищены.
      </div>
    </footer>
  );
}
