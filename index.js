const TelegramBot = require('node-telegram-bot-api')
require('dotenv').config()
const TOKEN = process.env.TOKEN
const test1Questions = [
    'Работая с эмоциями вы повышаете:',
    'Работая с эмоциями вы понижаете:',
    'Понимая свои эмоции вы:',
    'Что происходит если вы игнорируете свои эмоции:',
    'Дистресс это:',
    'Эмоциональная хрупкость проявляется в виде:',
    'Что стоит за эмоцией:',
    'Что из перечисленного является потребностью:',
    'От чего зависит эмоциональный заряд (негативный или позитивный):',
    'Что из перечисленного является потребностью:'
]
const test1Answers = [
    ['Самооценку', 'Тревогу', 'Страх', 'Гнев'],
    ['Взаимопонимание', 'Самооценку', 'Тревогу', 'Радость'],
    ['Понижаете свою самооценку', 'Усиливаете тревогу', 'Улучшаете контакт с собой', 'Ухудшаете свое самочувствие'],
    ['Повышение своей самооценки', 'Увеличение стресса', 'Улучшение контакта с собой', 'Усиление контакта с другими'],
    ['Повторяющийся стресс', 'Платье для вечера', 'Уменьшение стресса', 'Увеличение радости'],
    ['Сближения с людьми', 'Улучшения взаимопонимания', 'Разрешения конфликтов', 'Избегания конфликтов'],
    ['Правила', 'Потребность', 'Цель', 'Скука'],
    ['Досада', 'Ненависть', 'Уважение', 'Тоска'],
    ['Погоды', 'Правительства', 'Потребности', 'Мотивации'],
    ['Безопасность', 'Отвращение', 'Презрение', 'Неуверенность',]
]
const test1CorrectAnswersId = [0, 2, 2, 1, 0, 3, 1, 2, 2, 0]
let startKeyboard = ['Закрыть', 'Помощь']

const bot = new TelegramBot(TOKEN, {
    polling: true
})
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

//TELEGRAM BOT
bot.onText(/\/start/, (msg) => {
    const {id} = msg.chat
    bot.sendMessage(id, 'Привет, ' + msg.from.first_name + '!\n Какой тест ты хотел(а) бы пройти?', {
        reply_markup: {
            keyboard: [startKeyboard]
        }
    });
})

bot.onText(/Закрыть/, (msg) => {
    const {id} = msg.chat
    bot.sendMessage(id, 'Вы закрыли клавиатуру. Для продолжения работы нажмите на кнопку /start', {
        reply_markup: {
            remove_keyboard: true
        }
    })
})

bot.onText(/Тест 1/, (msg) => {
    const {id} = msg.chat
    let count = 0
    let interval = setInterval(function (){
        if (count == 10){
            clearInterval(interval)
        } else {
            bot.sendPoll(id,test1Questions[count],test1Answers[count], {
                type: 'quiz',
                is_anonymous: false,
                correct_option_id: test1CorrectAnswersId[count],
            })
            count++
        }
    }, 500)
})

let userAnswers = []

bot.on('poll_answer', (answer) => {
    console.log(answer)
    if (userAnswers.length >= 10){
        console.log('answers collected')

    } else {
        userAnswers.push(answer.option_ids[0])
        console.log(userAnswers)
    }
})














// ADDING NEW TESTS
bot.onText(/qkrvjrpbbn/, (msg) => {
    const {id} = msg.chat
    startKeyboard.insert(startKeyboard.length - 2, 'Тест 1')
    bot.sendMessage(id, 'Вы успешно добавили Тест 1 в общий пулл')
})

bot.onText(/dydwurwvoo/, (msg) => {
    const {id} = msg.chat
    startKeyboard.insert(startKeyboard.length - 2, 'Тест 2')
    bot.sendMessage(id, 'Вы успешно добавили Тест 2 в общий пулл')
})

bot.onText(/arssrxbtob/, (msg) => {
    const {id} = msg.chat
    startKeyboard.insert(startKeyboard.length - 2, 'Тест 3')
    bot.sendMessage(id, 'Вы успешно добавили Тест 3 в общий пулл')
})

bot.onText(/rbcqkblfbx/, (msg) => {
    const {id} = msg.chat
    startKeyboard.insert(startKeyboard.length - 2, 'Тест 4')
    bot.sendMessage(id, 'Вы успешно добавили Тест 4 в общий пулл')
})

bot.onText(/xxsbnrjwil/, (msg) => {
    const {id} = msg.chat
    startKeyboard.insert(startKeyboard.length - 2, 'Тест 5')
    bot.sendMessage(id, 'Вы успешно добавили Тест 5 в общий пулл')
})

bot.onText(/zxxxfxncnh/, (msg) => {
    const {id} = msg.chat
    startKeyboard.insert(startKeyboard.length - 2, 'Тест 6')
    bot.sendMessage(id, 'Вы успешно добавили Тест 6 в общий пулл')
})

bot.onText(/oororodscw/, (msg) => {
    const {id} = msg.chat
    startKeyboard.insert(startKeyboard.length - 2, 'Тест 7')
    bot.sendMessage(id, 'Вы успешно добавили Тест 7 в общий пулл')
})

bot.onText(/fioosudjwr/, (msg) => {
    const {id} = msg.chat
    startKeyboard.insert(startKeyboard.length - 2, 'Тест 8')
    bot.sendMessage(id, 'Вы успешно добавили Тест 8 в общий пулл')
})

bot.onText(/hhemjlnoev/, (msg) => {
    const {id} = msg.chat
    startKeyboard.insert(startKeyboard.length - 2, 'Тест 9')
    bot.sendMessage(id, 'Вы успешно добавили Тест 9 в общий пулл')
})


// bot.onText(/помощь/, (msg) => {
//     const { id } = msg.chat
//     bot.sendMessage(id, 'Hello ' + msg.from.first_name + '!\nAvailable commands:\n/start `testCode` to start your test \n/help to get some help \n Available testCode: test1code', {})
// })

// bot.onText(/\/start (.+)/, (msg, [source, match]) => {
//     const { id } = msg.chat
//     if (match === test1Code){
//         for (let i=0; i<test1Questions.length; i++){
//             bot.sendPoll(id, test1Questions[i], pollOptions, {
//                 is_anonymous: false
//             })
//         }
//     }
// })

