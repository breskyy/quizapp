# Quizapp

This project is a simple web-based quiz application that allows users to test their knowledge by answering a series of questions. The app includes various functionalities, such as setting the number of questions, reviewing questions, and continuous quiz mode, which lets the user take all the questions in one go. The application is built using HTML, CSS, and JavaScript.

## Features

- **Question Set Selection**: Users can select how many questions they want to answer per set before starting the quiz.
- **Multiple Modes**:
  - **Standard Quiz Mode**: Users complete a selected number of questions per set.
  - **Continuous Mode**: Users can complete all questions in one continuous session.
- **Question Review**: Users can browse through all available quiz questions without taking the quiz.
- **Feedback and Scoring**: After completing each set of questions, users receive feedback on their performance, including which answers were correct and their overall score.
- **Retry Functionality**: After completing the quiz, users can retry with the same or different settings.
- **Responsive Design**: The layout adjusts based on screen size for a smooth experience on various devices.

## Files Overview

- **HTML Structure**:
  - The main HTML file includes a basic structure with a quiz container, input fields for selecting the number of questions, and buttons for different actions such as starting the quiz or reviewing questions.
  
- **CSS Styling** (`css/style.css`):
  - External CSS file that styles the layout, buttons, and question elements to ensure a clean, user-friendly interface.

- **JavaScript Logic** (`scripts/script.js`):
  - Handles the core functionality of the quiz:
    - Selecting and displaying questions.
    - Tracking user responses and scores.
    - Managing different quiz modes.
    - Providing feedback and allowing users to retry the quiz.

## Usage

1. **Starting the Quiz**:
   - Open the page and select how many questions you want in the set using the number input field.
   - Click on "Rozpocznij Quiz" to start the quiz or "Przerób jednym ciągiem" for continuous mode.

2. **Answering Questions**:
   - Each question will display multiple-choice options. Select your answer and proceed to the next question by clicking the "Next" button.

3. **Quiz Results**:
   - At the end of the quiz (or set), you will receive a summary of your answers, showing which were correct and your overall score as a percentage.

4. **Review Questions**:
   - Click "Przeglądaj pytania" to review all available questions without starting a quiz.

5. **Retry the Quiz**:
   - After completing the quiz, you can retry the same quiz with different or same settings by clicking "Spróbuj ponownie".

## Development

To modify or extend the functionality:

- **Questions**: The questions are stored in a JavaScript array. To add more questions, simply extend the `questions` array in the `script.js` file.
  
  Example question format:
  ```javascript
  { 
    question: "What is the capital of France?", 
    options: ["Berlin", "Madrid", "Paris", "Rome"], 
    correctAnswer: 2 
  }

- **CSS**: Customize the appearance by modifying `css/style.css`.

## Future Improvements

- Add a backend to save user scores and progress.
- Implement additional types of questions (e.g., true/false, open-ended).
- Add a timer for each quiz session.
  
## License

This project is open-source and available under the [MIT License](LICENSE).

---

Enjoy the quiz!
