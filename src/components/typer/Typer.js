import { GlobalHotKeys } from 'react-hotkeys';
import { useState, useEffect } from 'react';
import confettiAnimation from '../../util/confetti';
import Preview from '../preview/Preview';
import keyMap from '../../util/hotkey';
import './Typer.css';

const TARGET = 'changworks';

const Typer = () => {
    const [style, setStyle] = useState('text');
    const [targetIndex, setTargetIndex] = useState(0);

    const handlers = {
        ALPHABET_PRESS: (event) => {
            setTargetIndex((t) => {
                if (event.key === TARGET[t]) return t + 1;
                else return 0;
            });
        },
    };

    useEffect(() => {
        if (targetIndex === TARGET.length) {
            // when the user has typed the entire word
            confettiAnimation();
            setStyle('green-text');
            setTargetIndex(0);
        } else if (targetIndex === 0) {
            setStyle((t) => (t === 'text' ? 'red-text' : t));
        }
    }, [targetIndex]);

    useEffect(() => {
        if (style !== 'text') {
            // this will make the entire text green/red for 0.5 sec
            // green -> user correctly types the entire word
            // red   -> user presses a wrong key
            setTimeout(() => {
                setStyle('text');
            }, 500);
        }
    }, [style]);

    return (
        <>
            <GlobalHotKeys keyMap={keyMap} handlers={handlers} />
            <div className="typer">
                <div className="typer-text">Type</div>
                <span>"</span>
                <Preview {...{ target: TARGET, targetIndex, style }} />
                <span>"</span>
            </div>
        </>
    );
};

export default Typer;
