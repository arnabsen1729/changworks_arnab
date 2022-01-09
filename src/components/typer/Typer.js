import { GlobalHotKeys } from 'react-hotkeys';
import './Typer.css';

const alpha = Array.from(Array(26)).map((e, i) => i + 97);
const lowercase = alpha.map((x) => String.fromCharCode(x));

const keyMap = {
    ALPHABET_PRESS: { sequences: lowercase, action: 'keydown' },
};
const handlers = { ALPHABET_PRESS: (event) => console.log(event) };

function Typer() {
    return (
        <>
            <GlobalHotKeys keyMap={keyMap} handlers={handlers} />
            <div className="typer">
                <div className="typer-text">Type "changworks"</div>
                <div className="typer-keypress">keypress</div>
            </div>
        </>
    );
}

export default Typer;
