const TelegramBot = require("node-telegram-bot-api");
const config = require("config");

const bot = new TelegramBot(config.get("TELEGRAM_BOT_TOKEN"), { polling: true });

bot.onText(/\/menu/, (msg) => {
    const chatId = msg.chat.id;
    const options = {
        reply_markup: {
            keyboard: [["Рестарт dev fins_rus", "Рестарт dev fins_enu"], ["Рестарт test fins_rus", "Рестарт test fins_enu"], ["Рестарт fins_top"]],
            resize_keyboard: true,
        },
    };
    bot.sendMessage(chatId, "⌨️", options);
});
