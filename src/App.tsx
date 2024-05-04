import Drawing from "./components/Drawing/Drawing";
import Word from "./components/Word/Word";
import Keyboard from "./components/Keyboard/Keyboard";
import "./App.css";

function App() {
    return (
        <div className="container">
            <Drawing />
            <Word />
            <Keyboard />
        </div>
    );
}

export default App;
