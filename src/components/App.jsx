import from './App.css';

function App() {
    return (
        <>
         <div id="main-section">
        <label for="caption">Password Generator</label>
        <div id="copy">
            <input id="caption" type="text" value="" disabled />
            <div id="copy-icon"><i className="fas fa-copy"></i></div>
            <div id="copy-msg">Copied</div>
        </div>
        <input id="range" type="range" value="6" min="4" max="20" />
        <ul>
            <li>
                <div className="key">Password length: </div>
                <div className="value">5</div>
            </li>
            <li>
                <div className="key">Include lowercase (a-z): </div>
                <input className="box" type="checkbox" checked />
            </li>
            <li>
                <div className="key">Include uppercase (A-Z): </div>
                <input className="box" type="checkbox" checked />
            </li>
            <li>
                <div className="key">Include number (0-9): </div>
                <input className="box" type="checkbox" checked />
            </li>
            <li>
                <div className="key">Include symble (@-?): </div>
                <input className="box" type="checkbox" checked />
            </li>
        </ul>
        <button>Generate Password</button>
    </div>
        )
}

export default App;