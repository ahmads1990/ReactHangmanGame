import Drawing from "./components/Drawing/Drawing";
import Word from "./components/Word/Word";
import Keyboard from "./components/Keyboard/Keyboard";
import { useEffect, useState } from "react";
import "./App.css";
import wordData from "./wordList.json";

function App() {
    const [randomWord, setRandomWord] = useState("");
    // Holds all the letters guessed by the user
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const selectNewRandomWord = () => {
        const newWord = wordData[Math.ceil(wordData.length * Math.random())];
        setRandomWord(newWord);
    };
    useEffect(() => {
        selectNewRandomWord();
    }, []);
    // Add new letter to guessedLetters state
    const guessNewLetter = (letter: string) => {
        const newArray = [...guessedLetters, letter];
        setGuessedLetters(newArray);
    };
    // Runs when user uses keyboard
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key;
            if (!key.match(/^[a-z]$/)) return;
            e.preventDefault();
            guessNewLetter(key);
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [guessedLetters]);

    return (
        <div className="container">
            <Drawing />
            <Word wordToGuess={randomWord} guessedLetters={guessedLetters} />
            <Keyboard guessNewLetter={guessNewLetter} />
        </div>
    );
}

export default App;
