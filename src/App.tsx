import Drawing from "./components/Drawing/Drawing";
import Word from "./components/Word/Word";
import Keyboard from "./components/Keyboard/Keyboard";
import { useEffect, useState } from "react";
import "./App.css";
import wordData from "./wordList.json";

function App() {
    const [randomWord, setRandomWord] = useState("");
    // Holds all the letters guessed by the user
    const [guessedLetters, setGuessedLetters] = useState<string[]>(["v", "a", "e", "s", "t"]);

    const selectNewRandomWord = () => {
        const newWord = wordData[Math.ceil(wordData.length * Math.random())];
        setRandomWord(newWord);
    };

    useEffect(() => {
        selectNewRandomWord();
    }, []);

    return (
        <div className="container">
            <Drawing />
            <Word wordToGuess={randomWord} guessedLetters={guessedLetters} />
            <Keyboard />
        </div>
    );
}

export default App;
