import React from 'react';
import './Preview.css';

const Preview = ({ target, targetIndex, style }) => {
    return (
        <div className="Typer">
            <span className="green-text">{target.slice(0, targetIndex)}</span>
            <span className={style}>{target.slice(targetIndex)}</span>
        </div>
    );
};

export default Preview;
