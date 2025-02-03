# TypeEcho - Interactive Typing Test

TypeEcho is a web-based typing test application that utilizes the Web Speech API to read words aloud. Users type the spoken words within a time limit, improving their typing speed and accuracy. The app dynamically selects 10 random words from a set of 100 words for each difficulty level.

## Features

- **Three Difficulty Levels**: Child, Intermediate, and Advanced.
- **Random Word Selection**: Each test randomly selects 10 words from a predefined 100-word list per difficulty level.
- **Speech Synthesis**: Uses Web Speech API to pronounce words.
- **User Feedback**: Indicates correct and incorrect attempts.
- **Custom Timer**: Adjustable duration with a slider.
- **Score Tracking**: Displays score after the test.
- **Interactive UI**: Smooth animations and real-time feedback.

## Technologies Used

- HTML
- CSS
- JavaScript
- Web Speech API

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/TypeEcho.git
   ```
2. Navigate to the project directory:
   ```bash
   cd TypeEcho
   ```
3. Open `index.html` in a browser to run the app.

## Usage

1. Click on **Start Test** to begin.
2. The app will speak a word; type it into the input box.
3. Press **Enter** to submit your answer.
4. Correct and incorrect attempts are indicated with color changes.
5. The test ends when time runs out, displaying your score.
6. Click **Play Again** to restart the test.

## Customization

- Modify `wordLists` in `script.js` to change word sets.
- Adjust UI styles in `styles.css`.
- Change the speech rate or voice in `speakWord` function.

## License

This project is open-source and available under the MIT License.

## Contributions

Feel free to fork this repository, make improvements, and submit pull requests.

## Contact

For questions or suggestions, contact [Your Name] at [your-email@example.com].

