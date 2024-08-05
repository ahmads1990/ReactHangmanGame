import Drawing from "./components/Drawing/Drawing";
import Word from "./components/Word/Word";
import Keyboard from "./components/Keyboard/Keyboard";
import { useEffect, useState } from "react";
import "./App.css";
import wordData from "./wordList.json";

function App() {
    const [wordToGuess, setWordToGuess] = useState("");

    // Holds all the letters guessed by the user
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));
    const isLoser = incorrectLetters.length >= 6;
    const isWinner = wordToGuess.split("").every((p) => guessedLetters.includes(p));

    // Generate new random word to guess
    const selectNewRandomWord = (): string => {
        return wordData[Math.ceil(wordData.length * Math.random())];
    };
    // Use effect run on mount and unmount
    useEffect(() => {
        setWordToGuess(selectNewRandomWord());
    }, []);
    // Add new letter to guessedLetters state
    const guessNewLetter = (letter: string) => {
        if (isWinner || isLoser) return;
        // If letter is already chosen don't punish user just return
        if (guessedLetters.includes(letter)) return;
        // Add new letter to guessed arrays
        setGuessedLetters([...guessedLetters, letter]);
    };

    // Runs when guessedLetters or randomWord changes
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

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;
            if (key !== "Enter") return;
            e.preventDefault();
            setGuessedLetters([]);
            setWordToGuess(selectNewRandomWord());
        };
        document.addEventListener("keypress", handler);
        return () => {
            document.removeEventListener("keypress", handler);
        };
    }, [guessedLetters]);

    return (
        <div
            className="container"
            style={{
                maxWidth: "800px",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                margin: "0 auto",
                alignItems: "center",
            }}
        >
            <div style={{ fontSize: "2rem", textAlign: "center" }}>
                {isWinner && "Winner - Refresh to try again"}
                {isLoser && "Nice try"}
            </div>
            <Drawing countToDraw={incorrectLetters.length} />
            <Word wordToGuess={wordToGuess} guessedLetters={guessedLetters} reveal={isWinner || isLoser} />
            <div style={{ alignSelf: "stretch" }}>
                <Keyboard
                    disabled={isWinner || isLoser}
                    guessNewLetter={guessNewLetter}
                    inactiveLetters={incorrectLetters}
                />
            </div>
        </div>
    );
}

export default App;
