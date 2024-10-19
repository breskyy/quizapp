// Lista przykładowych pytań
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
        let allUserAnswers = [];
        let remainingQuestions = [...questions];
        let currentSet = 1;
        let totalSets = 1;
        let questionsPerSet = 1;
        let totalQuestions = questions.length;
        let isContinuousMode = false;
        let quizCompleted = false;

        function drawQuestions(numberOfQuestions) {
            const shuffled = [...remainingQuestions].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, numberOfQuestions);
        }

        function showQuestion(questionIndex) {
            const quizContainer = document.getElementById('quiz-container');
            quizContainer.innerHTML = '';

            if (isContinuousMode) {
                const setIndicator = document.createElement('div');
                setIndicator.classList.add('set-number');
                setIndicator.textContent = `Zestaw ${currentSet}/${totalSets}`;
                quizContainer.appendChild(setIndicator);
            }

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

        // Następne pytanie
        document.getElementById('next-question-btn').addEventListener('click', () => {
            const selectedOption = document.querySelector('input[name="answer"]:checked');
            if (selectedOption) {
                userAnswers.push(parseInt(selectedOption.value));
                currentQuestionIndex++;

                if (currentQuestionIndex < drawnQuestions.length) {
                    showQuestion(currentQuestionIndex);
                } else {
                    allUserAnswers = allUserAnswers.concat(userAnswers);
                    remainingQuestions = remainingQuestions.filter(q => !drawnQuestions.includes(q));
                    showSetResults();
                }
            } else {
                alert('Please select an answer!');
            }
        });

        function showSetResults() {
            const quizContainer = document.getElementById('quiz-container');
            quizContainer.innerHTML = '<h2>Podsumowanie zestawu</h2>';
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
            const scorePercentage = ((correctAnswersCount / drawnQuestions.length) * 100).toFixed(2);
            resultContainer.innerHTML = `Twój wynik: ${correctAnswersCount}/${drawnQuestions.length} (${scorePercentage}%)`;
            quizContainer.appendChild(resultContainer);

            if (isContinuousMode && remainingQuestions.length > 0) {
                document.getElementById('continue-btn').style.display = 'block';
            } else {
                quizCompleted = true;
                document.getElementById('retry-btn').style.display = 'block';
            }

            if (isContinuousMode) {
                const totalCorrectAnswers = allUserAnswers.reduce((total, answer, index) => {
                    const originalQuestionIndex = Math.floor(index / questionsPerSet);
                    const question = questions[originalQuestionIndex];
                    return total + (answer === question.correctAnswer ? 1 : 0);
                }, 0);

                const overallContainer = document.createElement('div');
                overallContainer.classList.add('result-overall');
                const overallPercentage = ((totalCorrectAnswers / allUserAnswers.length) * 100).toFixed(2);
                overallContainer.innerHTML = `Średnia: ${totalCorrectAnswers}/${allUserAnswers.length} (${overallPercentage}%)`;
                quizContainer.appendChild(overallContainer);
            }

            document.getElementById('next-question-btn').style.display = "none";
        }
        
        // Kontynuuj button - 'Przerób jednym ciągiem'
        document.getElementById('continue-btn').addEventListener('click', () => {
            userAnswers = [];
            currentQuestionIndex = 0;
            currentSet++;
            drawnQuestions = drawQuestions(questionsPerSet);
            showQuestion(currentQuestionIndex);
            document.getElementById('continue-btn').style.display = 'none';
            document.getElementById('next-question-btn').style.display = 'block';
        });

        // Start quiz 
        function startQuiz(continuous = false) {
            questionsPerSet = parseInt(document.getElementById('numQuestions').value);
            totalSets = continuous ? Math.ceil(totalQuestions / questionsPerSet) : 1;
            drawnQuestions = drawQuestions(questionsPerSet);
            currentSet = 1;
            currentQuestionIndex = 0;
            allUserAnswers = [];
            userAnswers = [];
            remainingQuestions = [...questions];
            isContinuousMode = continuous;
            quizCompleted = false;

            document.getElementById('menu').style.display = 'none';
            document.getElementById('quiz-container').style.display = 'block';
            document.getElementById('next-question-btn').style.display = 'block';
            document.getElementById('return-menu-btn').style.display = 'block';
            document.getElementById('continue-btn').style.display = 'none';
            document.getElementById('retry-btn').style.display = 'none';

            showQuestion(currentQuestionIndex);
        }

        // Obsługa przycisku powrotu do menu
        document.getElementById('return-menu-btn').addEventListener('click', () => {
            if (quizCompleted) {
                resetToMenu();
            } else {
                const confirmExit = confirm("Czy na pewno chcesz opuścić quiz? Stracisz wszystkie dotychczasowe postępy.");
                if (confirmExit) {
                    resetToMenu();
                }
            }
        });

        // Powrót do menu głównego
        function resetToMenu() {
            currentQuestionIndex = 0;
            userAnswers = [];
            drawnQuestions = [];
            remainingQuestions = [...questions];

            document.getElementById('menu').style.display = 'block';
            document.getElementById('quiz-container').style.display = 'none';
            document.getElementById('next-question-btn').style.display = 'none';
            document.getElementById('return-menu-btn').style.display = 'none';
            document.getElementById('continue-btn').style.display = 'none';
            document.getElementById('retry-btn').style.display = 'none';
        }

        document.getElementById('start-quiz-btn').addEventListener('click', () => startQuiz(false));
        document.getElementById('start-continuous-btn').addEventListener('click', () => startQuiz(true));

        // Funkcja do przeglądania pytań
        document.getElementById('review-questions-btn').addEventListener('click', () => {
            const quizContainer = document.getElementById('quiz-container');
            quizContainer.innerHTML = '<h2>Przeglądaj pytania</h2>';
            questions.forEach((question, index) => {
                const questionElement = document.createElement('h3');
                questionElement.textContent = `Question ${index + 1}: ${question.question}`;
                quizContainer.appendChild(questionElement);

                question.options.forEach((option, i) => {
                    const optionElement = document.createElement('div');
                    optionElement.textContent = `${i + 1}: ${option}`;
                    quizContainer.appendChild(optionElement);
                });
            });
            document.getElementById('menu').style.display = 'none';
            document.getElementById('return-menu-btn').style.display = 'block';
        });

        // Funkcja do resetowania quizu
        document.getElementById('retry-btn').addEventListener('click', () => {
            startQuiz(isContinuousMode);
        });
