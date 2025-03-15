document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Главная страница загружена!");
    if (window.Telegram && Telegram.WebApp) {
        console.log("✅ Telegram WebApp API подключен");
        const initData = Telegram.WebApp.initDataUnsafe;
        console.log("📦 Данные от Telegram:", initData);
        const HOST_PATH='https://41ae-2a00-20-5-96e1-cdcb-20ae-69c5-1178.ngrok-free.app'

        fetch(`${HOST_PATH}/receive_telegram_data`, { // Отправляем запрос на сервер
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(initData)
        })
        .then(response => response.json())  // Когда сервер ответит, преобразуем JSON-ответ
        .then(data => console.log("✅ Сервер ответил:", data)) // Выводим результат в консоль
        .catch(error => console.error("❌ Ошибка при отправке:", error)); // Перехватываем ошибку

        // Сохраняем в localStorage
        localStorage.setItem("telegramData", JSON.stringify(initData));
    } else {
        console.warn("⚠️ Telegram WebApp API не подключен!");
    }



    // Логика перехода по картинкам (если нужно)
    document.querySelectorAll(".pizza-list a").forEach(link => {
        link.addEventListener("click", function (event) {
            console.log(`➡️ Переход к пицце: ${this.href}`);
        });
    });
});
