type WordProps = {
    wordToGuess: string;
    guessedLetters: string[];
};

const Word = ({ wordToGuess, guessedLetters }: WordProps) => {
    return (
        <div>
            <div>guess this {wordToGuess}</div>
            <div style={{ display: "flex", gap: "1rem" }}>
                {wordToGuess.split("").map((letter) => {
                    return <div>{guessedLetters.includes(letter) ? <span>{letter}</span> : <span>_</span>}</div>;
                })}
            </div>
        </div>
    );
};

export default Word;
