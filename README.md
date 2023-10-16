# Telegram Bot с меню для группы

Этот код создает телеграм-бота с меню, предоставляющим пользователю в грппе команды для быстрой отправки.

## Requirements

-   Node.js installed on your system.

## Setup

1. Установите все необходимые зависимости:
    ```bash
    npm install
    ```
2. В файле `default.json` укажите ваш токен Telegram-бота.
3. Запустите бот:
    ```bash
    npm start
    ```

## Usage

`/menu` Command

-   Description: This command sends the user a menu with buttons.
-   Syntax: `/menu`
-   Response: Keyboard menu with buttons.

## Dependencies

-   [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api): A Telegram Bot API wrapper for Node.js.
-   [config](https://github.com/node-config/node-config): Node-config organizes hierarchical configurations for your app deployments.

## Example

```javascript
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
```

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request.
