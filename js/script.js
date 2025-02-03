// Update the current year dynamically
document.getElementById("current-year").textContent = new Date().getFullYear();
// Word Lists (Categorized by Difficulty)
const wordLists = {
  child: [
    "cat",
    "dog",
    "sun",
    "moon",
    "tree",
    "ball",
    "book",
    "cup",
    "hat",
    "pen",
    "car",
    "bus",
    "apple",
    "baby",
    "bird",
    "cake",
    "fish",
    "frog",
    "duck",
    "pig",
    "cow",
    "star",
    "bed",
    "shoe",
    "leaf",
    "flower",
    "rain",
    "snow",
    "cloud",
    "door",
    "room",
    "house",
    "chair",
    "table",
    "smile",
    "song",
    "toy",
    "bear",
    "doll",
    "ring",
    "balloon",
    "pencil",
    "paper",
    "train",
    "plane",
    "bike",
    "park",
    "play",
    "slide",
    "swing",
    "treehouse",
    "bunny",
    "cookie",
    "candy",
    "mouse",
    "sock",
    "fork",
    "spoon",
    "plate",
    "garden",
    "grass",
    "bush",
    "sunflower",
    "butterfly",
    "rainbow",
    "dragon",
    "castle",
    "knight",
    "princess",
    "crown",
    "bottle",
    "lamp",
    "clock",
    "key",
    "guitar",
    "piano",
    "violin",
    "drum",
    "trumpet",
    "flute",
    "fox",
    "lion",
    "tiger",
    "zebra",
    "monkey",
    "elephant",
    "giraffe",
    "hippo",
    "rabbit",
    "squirrel",
    "deer",
    "owl",
    "cupcake",
    "jelly",
    "ice",
    "cream",
    "river",
    "mountain",
    "beach",
    "ocean",
  ],
  intermediate: [
    "happy",
    "river",
    "apple",
    "table",
    "cloud",
    "light",
    "dream",
    "music",
    "story",
    "world",
    "summer",
    "winter",
    "autumn",
    "spring",
    "garden",
    "forest",
    "mountain",
    "valley",
    "desert",
    "ocean",
    "island",
    "riverbank",
    "meadow",
    "breeze",
    "thunder",
    "lightning",
    "rainbow",
    "blossom",
    "fragrance",
    "whisper",
    "shadow",
    "mirror",
    "window",
    "horizon",
    "journey",
    "voyage",
    "passage",
    "mystery",
    "secret",
    "puzzle",
    "history",
    "legend",
    "fortune",
    "victory",
    "struggle",
    "challenge",
    "courage",
    "honor",
    "wisdom",
    "spirit",
    "nature",
    "miracle",
    "freedom",
    "treasure",
    "promise",
    "passion",
    "justice",
    "silence",
    "beauty",
    "color",
    "texture",
    "flavor",
    "aroma",
    "desire",
    "comfort",
    "talent",
    "insight",
    "sparkle",
    "energy",
    "symbol",
    "meaning",
    "dreamer",
    "sunrise",
    "sunset",
    "starlight",
    "midnight",
    "snowfall",
    "rainfall",
    "echo",
    "rhythm",
    "harmony",
    "melody",
    "dance",
    "pattern",
    "design",
    "creation",
    "culture",
    "tradition",
    "festival",
    "celebration",
    "destiny",
    "optimism",
    "resolve",
    "ambition",
    "clarity",
    "balance",
    "empathy",
    "innovation",
    "unity",
    "integrity",
  ],
  advanced: [
    "encyclopedia",
    "onomatopoeia",
    "butterfly",
    "adventure",
    "imagination",
    "celebration",
    "magnificent",
    "universe",
    "dictionary",
    "phenomenon",
    "articulate",
    "bewildering",
    "quintessential",
    "serendipity",
    "effervescent",
    "iridescent",
    "labyrinthine",
    "eloquence",
    "plethora",
    "cacophony",
    "inconceivable",
    "incorrigible",
    "paradigm",
    "juxtaposition",
    "euphemism",
    "conundrum",
    "enigmatic",
    "idiosyncrasy",
    "ineffable",
    "mellifluous",
    "transcendence",
    "opalescent",
    "vicissitude",
    "soliloquy",
    "susurration",
    "ephemeral",
    "scintillating",
    "irrefutable",
    "perspicacious",
    "uncharacteristic",
    "exuberance",
    "ambidextrous",
    "unanticipated",
    "introspection",
    "phenomenological",
    "circumlocution",
    "indispensable",
    "multifaceted",
    "incomprehensible",
    "transcendental",
    "revolutionary",
    "controversial",
    "introspective",
    "bewilderment",
    "melancholy",
    "anthropomorphic",
    "ubiquitous",
    "cacophonous",
    "discombobulated",
    "extraordinary",
    "incandescent",
    "irrefutability",
    "ostentatious",
    "fortuitous",
    "serendipitous",
    "exuberant",
    "vulnerability",
    "ineffability",
    "multifarious",
    "paradoxical",
    "metamorphosis",
    "iridescence",
    "sophistication",
    "reverberation",
    "existential",
    "transmutation",
    "perspicuity",
    "ambivalence",
    "circumstantial",
    "inimitable",
    "sensational",
    "compendium",
    "connoisseur",
    "philanthropist",
    "perplexity",
    "nonconformist",
    "invincible",
    "incomparable",
    "indefatigable",
    "insurmountable",
    "unpretentious",
    "irreverent",
    "monumental",
    "prodigious",
    "sagacity",
    "perspicacity",
    "subterranean",
    "cataclysmic",
    "bibliophile",
    "magnanimous",
  ],
};

let currentLevel = "child"; // Start with child-level words
let currentWordIndex = 0;
let timeLeft = 60; // Default time is 1 minute
let score = 0;
let timerInterval;
// Track incorrect attempts for the current word
let incorrectAttempts = 0;
// DOM Elements
const playWordBtn = document.getElementById("play-word-btn");
const playAgainBtn = document.getElementById("play-again-btn");
const userInput = document.getElementById("user-input");
const feedback = document.getElementById("feedback");
const timerDisplay = document.getElementById("time-left");
const scoreDisplay = document.getElementById("score");
const scoreSection = document.getElementById("score-display");
const timeSlider = document.getElementById("time-slider");
const timeValue = document.getElementById("time-value");
// Update the displayed time value when the slider changes
timeSlider.addEventListener("input", () => {
  const selectedTime = parseInt(timeSlider.value);
  timeValue.textContent = `${selectedTime} Minute${
    selectedTime > 1 ? "s" : ""
  }`;
  timeLeft = selectedTime * 60; // Convert minutes to seconds
  timerDisplay.textContent = timeLeft;
});
// Function to speak the current word using Web Speech API
function speakWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  // Get available voices and select a preferred one
  const voices = window.speechSynthesis.getVoices();
  const preferredVoiceName = "Google US English"; // Change to your preferred voice
  const humanVoice = voices.find((voice) =>
    voice.name.includes(preferredVoiceName)
  );
  if (humanVoice) {
    utterance.voice = humanVoice;
  } else {
    console.warn(
      `Preferred voice "${preferredVoiceName}" not found. Using default voice.`
    );
  }
  // Slow down the speech rate for better clarity
  utterance.rate = 0.6; // Slower speech for better clarity
  // Speak the word
  window.speechSynthesis.speak(utterance);
}
// Ensure voices are loaded before using them
let voicesLoaded = false;
window.speechSynthesis.onvoiceschanged = () => {
  voicesLoaded = true; // Mark voices as loaded
};
// Start the typing test
function startTest() {
  if (!voicesLoaded) {
    alert("Voices are still loading. Please try again in a moment.");
    return;
  }
  // Reset variables
  currentLevel = "child";
  currentWordIndex = 0;
  score = 0;
  incorrectAttempts = 0; // Reset incorrect attempts
  userInput.value = "";
  userInput.disabled = false;
  feedback.textContent = "";
  scoreSection.classList.add("d-none");
  // Start timer
  clearInterval(timerInterval); // Clear any existing timer
  timerInterval = setInterval(updateTimer, 1000);
  // Hide "Start Test" button and show "Play Again" button
  playWordBtn.classList.add("d-none");
  playAgainBtn.classList.remove("d-none");
  // Speak the first word
  speakNextWord();
}
// Update the timer
function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
  } else {
    clearInterval(timerInterval);
    endTest();
  }
}
// End the test and display the score
function endTest() {
  userInput.disabled = true;
  scoreDisplay.textContent = score;
  scoreSection.classList.remove("d-none");
  // Show "Start Test" button and hide "Play Again" button
  playWordBtn.classList.remove("d-none");
  playAgainBtn.classList.add("d-none");
}
// Speak the next word in the current level
function speakNextWord() {
  const currentWordList = wordLists[currentLevel];
  if (currentWordIndex < currentWordList.length) {
    const currentWord = currentWordList[currentWordIndex];
    speakWord(currentWord);
  } else {
    // Move to the next difficulty level
    if (currentLevel === "child") {
      currentLevel = "intermediate";
    } else if (currentLevel === "intermediate") {
      currentLevel = "advanced";
    } else {
      endTest(); // End the test after completing all levels
      return;
    }
    currentWordIndex = 0;
    speakNextWord();
  }
}
// Handle user input on pressing ENTER
userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const typedText = userInput.value.trim().toLowerCase(); // Convert input to lowercase
    const currentWordList = wordLists[currentLevel];
    const correctWord = currentWordList[currentWordIndex].toLowerCase(); // Convert correct word to lowercase
    // Validate input
    if (typedText === correctWord) {
      feedback.textContent = "Correct!";
      feedback.className = "correct";
      // Update score and move to the next word
      score++;
      currentWordIndex++;
      incorrectAttempts = 0; // Reset incorrect attempts
      userInput.value = "";
      feedback.textContent = "";
      // Speak the next word
      speakNextWord();
    } else {
      incorrectAttempts++; // Increment incorrect attempts
      if (incorrectAttempts >= 3) {
        // Display the correct word in red
        feedback.textContent = `The correct word is: ${currentWordList[currentWordIndex]}`;
        feedback.className = "wrong";
        // Allow the user to proceed without typing the correct word
        setTimeout(() => {
          score++; // Optionally, don't count this as a correct answer
          currentWordIndex++;
          incorrectAttempts = 0; // Reset incorrect attempts
          userInput.value = "";
          feedback.textContent = "";
          // Speak the next word
          speakNextWord();
        }, 2000); // Wait 2 seconds before moving to the next word
      } else {
        // Display "Wrong!" for the first two incorrect attempts
        feedback.textContent = "Wrong!";
        feedback.className = "wrong";
      }
    }
  }
});
// Event listener for Play Word button
playWordBtn.addEventListener("click", () => {
  startTest();
});
// Event listener for Play Again button
playAgainBtn.addEventListener("click", () => {
  // Replay the current word
  const currentWordList = wordLists[currentLevel];
  const currentWord = currentWordList[currentWordIndex];
  speakWord(currentWord);
});

function startTest() {
  if (!voicesLoaded) {
    alert("Voices are still loading. Please try again in a moment.");
    return;
  }
  // Reset variables
  currentLevel = "child";
  currentWordIndex = 0;
  score = 0;
  incorrectAttempts = 0; // Reset incorrect attempts
  userInput.value = "";
  userInput.disabled = false;
  feedback.textContent = "";
  scoreSection.classList.add("d-none");

  // Focus on the textbox so the user can start typing immediately
  userInput.focus();

  // Start timer
  clearInterval(timerInterval); // Clear any existing timer
  timerInterval = setInterval(updateTimer, 1000);

  // Hide "Start Test" button and show "Play Again" button
  playWordBtn.classList.add("d-none");
  playAgainBtn.classList.remove("d-none");

  // Speak the first word
  speakNextWord();
}

// Helper function to pick random words from an array
function getRandomWords(arr, count) {
  // Create a copy of the array and shuffle it
  const shuffled = arr.slice().sort(() => Math.random() - 0.5);
  // Return the first `count` words
  return shuffled.slice(0, count);
}

// Global object to hold the test words for each difficulty level
let testWords = {};

// --- Modified startTest() function ---
function startTest() {
  if (!voicesLoaded) {
    alert("Voices are still loading. Please try again in a moment.");
    return;
  }

  // Randomly select 10 words for each difficulty level
  testWords.child = getRandomWords(wordLists.child, 10);
  testWords.intermediate = getRandomWords(wordLists.intermediate, 10);
  testWords.advanced = getRandomWords(wordLists.advanced, 10);

  // Reset variables
  currentLevel = "child";
  currentWordIndex = 0;
  score = 0;
  incorrectAttempts = 0; // Reset incorrect attempts
  userInput.value = "";
  userInput.disabled = false;
  feedback.textContent = "";
  scoreSection.classList.add("d-none");

  // Focus on the textbox so the user can start typing immediately
  userInput.focus();

  // Start timer
  clearInterval(timerInterval); // Clear any existing timer
  timerInterval = setInterval(updateTimer, 1000);

  // Hide "Start Test" button and show "Play Again" button
  playWordBtn.classList.add("d-none");
  playAgainBtn.classList.remove("d-none");

  // Speak the first word
  speakNextWord();
}

// --- Modified speakNextWord() function ---
function speakNextWord() {
  // Use the randomly selected words for the current level
  const currentWordList = testWords[currentLevel];
  if (currentWordIndex < currentWordList.length) {
    const currentWord = currentWordList[currentWordIndex];
    speakWord(currentWord);
  } else {
    // Move to the next difficulty level
    if (currentLevel === "child") {
      currentLevel = "intermediate";
    } else if (currentLevel === "intermediate") {
      currentLevel = "advanced";
    } else {
      endTest(); // End the test after completing all levels
      return;
    }
    currentWordIndex = 0;
    speakNextWord();
  }
}

// --- Modified Event Listener for User Input ---
userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const typedText = userInput.value.trim().toLowerCase();
    // Use the random words instead of the full list
    const currentWordList = testWords[currentLevel];
    const correctWord = currentWordList[currentWordIndex].toLowerCase();

    if (typedText === correctWord) {
      feedback.textContent = "Correct!";
      feedback.className = "correct";
      score++;
      currentWordIndex++;
      incorrectAttempts = 0; // Reset incorrect attempts
      userInput.value = "";
      feedback.textContent = "";
      speakNextWord();
    } else {
      incorrectAttempts++;
      if (incorrectAttempts >= 3) {
        feedback.textContent = `The correct word is: ${currentWordList[currentWordIndex]}`;
        feedback.className = "wrong";
        setTimeout(() => {
          score++; // Optionally, still count as a correct attempt
          currentWordIndex++;
          incorrectAttempts = 0;
          userInput.value = "";
          feedback.textContent = "";
          speakNextWord();
        }, 2000);
      } else {
        feedback.textContent = "Wrong!";
        feedback.className = "wrong";
      }
    }
  }
});

// --- Modified Play Again Button Event Listener ---
playAgainBtn.addEventListener("click", () => {
  const currentWordList = testWords[currentLevel];
  const currentWord = currentWordList[currentWordIndex];
  speakWord(currentWord);
});
