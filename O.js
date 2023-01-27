//Open Closed Principle

function printQuiz(questions) {
    questions.forEach(question => {
        switch (question.type) {
            case 'boolean':
                console.log(question.description)
                console.log('1. True')
                console.log('2. False')
                break
            case 'multipleChoice':
                console.log(question.description)
                question.options.forEach((option, index) => {
                    console.log(`${index + 1}. ${option}`)
                })
                break
            case 'text':
                console.log(question.description)
                console.log('Answer:')
                break
        }
        console.log('')
    });
}

const questions = [
    {
        type:'boolean',
        description:'This is a statement.'
    },
    {
        type: 'multipleChoice',
        description: 'What is your favorite language?',
        options: ['CSS', 'JS', 'Python', 'CPP']
    },
    {
        type: 'text',
        description: 'Describe your experience so far.'
    }
]

//printQuiz(questions)

//Applied open closed principle

class BooleanQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log('1. True')
        console.log('2. False') 
    }
}

class MultipleChoiceQuestion {
    constructor(description, options) {
        this.description = description
        this.options = options
    }

    printQuestionChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`)
        }) 
    }
}

class TextQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log('Answer:') 
    }
}

function newPrintQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description)
        question.printQuestionChoices()
        console.log(' ')
    })
}

const ques = [
    new BooleanQuestion('This is easy.'),
    new MultipleChoiceQuestion('What is your favorite language?',
    ['CSS', 'HTML', 'Java', 'Python']),
    new TextQuestion('Describe your experience so far.')
]

newPrintQuiz(ques)