import "./word.css";
type WordProps = {
    wordToGuess: string;
    guessedLetters: string[];
    reveal?: boolean;
};

const Word = ({ wordToGuess, guessedLetters, reveal = false }: WordProps) => {
    return (
        <div
            className="word-container"
            style={{
                display: "flex",
                gap: ".25em",
                fontSize: "5rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                fontFamily: "monospace",
            }}
        >
            {/* {wordToGuess} */}
            {wordToGuess.split("").map((letter, index) =>
                guessedLetters.includes(letter) ? (
                    <div key={index} style={{ color: reveal ? "green" : "#FAFBFC" }}>
                        {letter}
                    </div>
                ) : reveal ? (
                    <span key={index} style={{ color: "red" }}>
                        {letter}
                    </span>
                ) : (
                    <span key={index}>_</span>
                )
            )}
        </div>
    );
};

export default Word;
