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
type KeyboardProps = { guessNewLetter: (a: string) => void };

const Keyboard = ({ guessNewLetter }: KeyboardProps) => {
    const handleButtonClick = (k: string) => {
        guessNewLetter(k);
    };

    return (
        <div className="keyboard" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "5px" }}>
            {KEYS.map((k) => (
                <button className="key" key={k} onClick={() => handleButtonClick(k)}>
                    {k}
                </button>
            ))}
        </div>
    );
};

export default Keyboard;
