import { GlobalHotKeys } from 'react-hotkeys';
import { useState, useEffect } from 'react';
import confettiAnimation from '../../util/confetti';
import Preview from '../preview/Preview';
import './Typer.css';

const alpha = Array.from(Array(26)).map((e, i) => i + 97);
const lowercase = alpha.map((x) => String.fromCharCode(x));

const keyMap = {
    ALPHABET_PRESS: { sequences: lowercase, action: 'keydown' },
};

const target = 'changworks';

const Typer = () => {
    const [currentKey, setCurrentKey] = useState('');
    const [targetIndex, setTargetIndex] = useState(0);

    const handleKeyPress = (key) => {
        setCurrentKey(key);
    };

    const handlers = {
        ALPHABET_PRESS: (event) => handleKeyPress(event.key),
    };

    useEffect(() => {
        if (targetIndex === target.length) {
            confettiAnimation();
            setTargetIndex(0);
        }
    }, [targetIndex]);

    useEffect(() => {
        setTargetIndex((t) => {
            if (currentKey === target[t]) return t + 1;
            else return 0;
        });
    }, [currentKey]);

    return (
        <>
            <GlobalHotKeys keyMap={keyMap} handlers={handlers} />
            <div className="typer">
                <div className="typer-text">Type</div>
                <span>"</span>
                <Preview {...{ target, targetIndex }} />
                <span>"</span>
            </div>
        </>
    );
};

export default Typer;
