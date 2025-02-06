```markdown
# Wordle Riddle

A simple Wordle clone built with React. Guess a 5-letter word in six attempts, with color-coded feedback for each guess.

## Features:
- 6 attempts to guess the correct word.
- Color-coded feedback:
  - **Green**: Correct letter, correct position.
  - **Yellow**: Correct letter, wrong position.
  - **Gray**: Incorrect letter.
- Toggle light/dark mode.
- Sound effects for guesses.
- Responsive design (mobile & desktop).
- Leaderboard tracking top 3 scores.
- **SweetAlert2** for popup alerts.
- **useContext** for state management.

## Tech Stack:
- **React** for the frontend.
- **CSS** for styling.
- **SweetAlert2** for alerts.
- **useContext** for state management.
- **Local Storage** (optional) for tracking top scores.

## Components:
1. **App.js**: Main game logic and UI.
2. **DarkModeToggle.js**: Toggle for light/dark modes.
3. **Keyboard.js**: Virtual keyboard for guessing.
4. **Leaderboard.js**: Displays top 3 scores.
5. **SoundToggle.js**: Toggle for sound effects.
6. **WordGrid.js**: Displays guesses and feedback.
7. **GameContext.js**: Manages game state with React's Context API.

## Setup Instructions:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/rajhrajesh/wordle-riddle.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd wordle-riddle
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the app**:
   ```bash
   npm start
   ```

   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## How to Play:
- Enter a 5-letter word and hit "Enter" or use the virtual keyboard.
- Feedback:
  - **Green**: Correct letter, correct position.
  - **Yellow**: Correct letter, wrong position.
  - **Gray**: Incorrect letter.
- You have six attempts to guess the word. Success and failure messages appear using **SweetAlert2**.
- View the top 3 scores based on the fewest attempts in the leaderboard.

## Building the Project:
1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Serve the production build**:
   ```bash
   npm install -g serve
   serve -s build
   ```

   Visit [https://wordle-riddle.vercel.app/] to view the production version.

## License:
This project is licensed under the Rajh Rajesh.
```