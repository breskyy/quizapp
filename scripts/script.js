// Lista pytań (dodano dodatkowe 5 pytań)
const questions = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correctAnswer: 2 },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: 1 },
    { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Hemingway", "Orwell"], correctAnswer: 0 },
    { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"], correctAnswer: 0 },
    { question: "What is the largest planet in the Solar System?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correctAnswer: 2 },
    { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "HO"], correctAnswer: 0 },
    { question: "In which year did World War II end?", options: ["1939", "1945", "1918", "1965"], correctAnswer: 1 },
    { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Da Vinci", "Picasso", "Michelangelo"], correctAnswer: 1 },
    { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], correctAnswer: 2 },
    { question: "Which planet is closest to the Sun?", options: ["Earth", "Venus", "Mercury", "Mars"], correctAnswer: 2 }
];

let currentQuestionIndex = 0;
let userAnswers = [];
let drawnQuestions = [];

function drawQuestions(numberOfQuestions) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numberOfQuestions);
}

function showQuestion(questionIndex) {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    const questionData = drawnQuestions[questionIndex];
    const questionElement = document.createElement('h2');
    questionElement.textContent = `Question ${questionIndex + 1}: ${questionData.question}`;
    quizContainer.appendChild(questionElement);

    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');

        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.name = 'answer';
        radioButton.value = index;
        radioButton.id = `option${index}`;

        const label = document.createElement('label');
        label.htmlFor = `option${index}`;
        label.textContent = option;

        optionElement.appendChild(radioButton);
        optionElement.appendChild(label);

        quizContainer.appendChild(optionElement);
    });
}

document.getElementById('next-question-btn').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        userAnswers.push(parseInt(selectedOption.value));
        currentQuestionIndex++;

        if (currentQuestionIndex < drawnQuestions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            showResults();
        }
    } else {
        alert('Please select an answer!');
    }
});

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '<h2>Quiz Results</h2>';
    let correctAnswersCount = 0;

    drawnQuestions.forEach((question, index) => {
        const resultElement = document.createElement('div');
        resultElement.innerHTML = `<strong>Question ${index + 1}:</strong> ${question.question}<br>`;

        question.options.forEach((option, i) => {
            const isCorrect = i === question.correctAnswer;
            const userAnswer = userAnswers[index] === i;
            let optionText = `${i + 1}: ${option}`;

            const optionSpan = document.createElement('span');
            optionSpan.textContent = optionText;

            if (userAnswer && isCorrect) {
                optionSpan.classList.add('correct');
                correctAnswersCount++;
            } else if (userAnswer) {
                optionSpan.classList.add('incorrect');
            }

            if (isCorrect) {
                optionSpan.classList.add('correct');
            }

            resultElement.appendChild(optionSpan);
            resultElement.innerHTML += '<br>';
        });

        quizContainer.appendChild(resultElement);
    });

    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container');
    const scorePercentage = (correctAnswersCount / drawnQuestions.length) * 100;
    resultContainer.innerHTML = `Twój wynik: ${correctAnswersCount}/${drawnQuestions.length} (${scorePercentage.toFixed(2)}%)`;
    quizContainer.appendChild(resultContainer);

    const retryButton = document.createElement('button');
    retryButton.textContent = "Spróbuj jeszcze raz";
    retryButton.addEventListener('click', resetQuiz);

    const backButton = document.createElement('button');
    backButton.textContent = "Powrót do menu";
    backButton.addEventListener('click', resetToMenu);

    quizContainer.appendChild(retryButton);
    quizContainer.appendChild(backButton);

    document.getElementById('next-question-btn').style.display = "none";
}

function showReview() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    let currentPage = 0;
    const questionsPerPage = 5;

    function displayPage(page) {
        quizContainer.innerHTML = '';
        const startIndex = page * questionsPerPage;
        const endIndex = Math.min(startIndex + questionsPerPage, questions.length);

        for (let i = startIndex; i < endIndex; i++) {
            const questionElement = document.createElement('h3');
            questionElement.textContent = `Question ${i + 1}: ${questions[i].question}`;
            quizContainer.appendChild(questionElement);

            questions[i].options.forEach((option, index) => {
                const answerElement = document.createElement('div');
                const isCorrect = index === questions[i].correctAnswer;
                answerElement.textContent = `${index + 1}: ${option}`;
                if (isCorrect) {
                    answerElement.classList.add('correct');
                }
                quizContainer.appendChild(answerElement);
            });
        }

        const paginationContainer = document.createElement('div');
        paginationContainer.id = "pagination";

        const prevButton = document.createElement('button');
        prevButton.textContent = "<< Poprzednia strona";
        prevButton.disabled = page === 0;
        prevButton.addEventListener('click', () => {
            if (page > 0) {
                displayPage(page - 1);
            }
        });

        const nextButton = document.createElement('button');
        nextButton.textContent = "Następna strona >>";
        nextButton.disabled = endIndex >= questions.length;
        nextButton.addEventListener('click', () => {
            if (endIndex < questions.length) {
                displayPage(page + 1);
            }
        });

        paginationContainer.appendChild(prevButton);
        paginationContainer.appendChild(nextButton);
        quizContainer.appendChild(paginationContainer);

        const backButton = document.createElement('button');
        backButton.textContent = "Powrót do menu";
        backButton.addEventListener('click', resetToMenu);
        quizContainer.appendChild(backButton);
    }

    displayPage(currentPage);
}

function resetQuiz() {
    const numQuestions = parseInt(document.getElementById('numQuestions').value);

    if (numQuestions > 0 && numQuestions <= questions.length) {
        drawnQuestions = drawQuestions(numQuestions);
        currentQuestionIndex = 0;
        userAnswers = [];
        showQuestion(currentQuestionIndex);
        document.getElementById('next-question-btn').style.display = 'block';
    } else {
        alert(`Wybierz liczbę pytań od 1 do ${questions.length}`);
    }
}

function resetToMenu() {
    currentQuestionIndex = 0;
    userAnswers = [];
    drawnQuestions = [];

    document.getElementById('menu').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('next-question-btn').style.display = 'none';
}

document.getElementById('start-quiz-btn').addEventListener('click', () => {
    const numQuestions = parseInt(document.getElementById('numQuestions').value);

    if (numQuestions > 0 && numQuestions <= questions.length) {
        drawnQuestions = drawQuestions(numQuestions);
        currentQuestionIndex = 0;
        userAnswers = [];

        document.getElementById('menu').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
        document.getElementById('next-question-btn').style.display = 'block';

        showQuestion(currentQuestionIndex);
    } else {
        alert(`Wybierz liczbę pytań od 1 do ${questions.length}`);
    }
});

document.getElementById('review-questions-btn').addEventListener('click', () => {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';

    showReview();
});