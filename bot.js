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

// Обработчик для приветствия новых участников
bot.on("new_chat_members", (msg) => {
    const chatId = msg.chat.id;
    const newMembers = msg.new_chat_members.map((user) => (user.username ? `@${user.username}` : user.first_name)).join(", ");
    bot.sendMessage(chatId, `Добро пожаловать, ${newMembers}!\n\nЭта группа предназначена для решения технических вопросов и обсуждения системных событий, таких как сбои, перезагрузки и другие технические темы. Для получения доступа к быстрым командам используйте /menu.`);
});
