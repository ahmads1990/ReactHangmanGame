import "./Keyboard.css";
const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
type KeyboardProps = {
    disabled: boolean;
    guessNewLetter: (a: string) => void;
    inactiveLetters: string[];
};

const Keyboard = ({ disabled = false, guessNewLetter, inactiveLetters }: KeyboardProps) => {
    const handleButtonClick = (k: string) => {
        if (!disabled) guessNewLetter(k);
    };

    return (
        <div className="keyboard" style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "5px" }}>
            {KEYS.map((k) => {
                const isInActive = inactiveLetters.includes(k);
                return (
                    <button
                        disabled={isInActive}
                        className={isInActive ? "key key-inactive" : "key"}
                        key={k}
                        onClick={() => handleButtonClick(k)}
                    >
                        {k}
                    </button>
                );
            })}
        </div>
    );
};

export default Keyboard;
