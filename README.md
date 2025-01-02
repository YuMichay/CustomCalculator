# Custom Calculator


## 🌐 English

Custom Calculator is the app that allows to use all features of the original calculator.

### Task

The task for this project is described in detail in the [Google Document](https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_/view).

### How to Run the App

Clone the repository and install dependencies:

```sh
git clone <repository_url>
cd <repository_directory>
npm install
```

Start the application:

```sh
npm run start
```

### Deploy

The application is deployed and accessible at:
👉 [Custom Calculator](https://yumichay.github.io/CustomCalculator/)

### Structure

index.html
style.css
script.js - main files

invoker.js
receiver.js
client.js
command.js - files for calculator functionality according to Command Pattern

commands.js - list of commands
operations.js - math operations implementation

formatNumber.js
finishOperation.js
createCommand.js - helpers

commands folder - creation of every command
tests folder - test for every math operation

## 🌐 Русский

Custom Calculator - это приложение которое позволяется пользоваться всеми функциями стандартного калькулятора.

### Задача

Задача этого проекта детально описана в [Google Document](https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_/view).

### Как Запустить Приложение

Склонируйте репозиторий и установите все зависимости:

```sh
git clone <repository_url>
cd <repository_directory>
npm install
```

Запустите приложение:

```sh
npm run start
```

### Деплой

Приложение развернуто и доступно по ссылке:
👉 [Custom Calculator](https://yumichay.github.io/CustomCalculator/)

### Структура

index.html
style.css
script.js - главные файлы

invoker.js
receiver.js
client.js
command.js - функционал калькулятора в соответствии с Command Pattern

commands.js - список команд
operations.js - математические операции

formatNumber.js
finishOperation.js
createCommand.js - вспомогательные функции

commands folder - создание класса каждой команды
tests folder - тесты для каждой математической операции