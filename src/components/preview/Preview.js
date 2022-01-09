import React from 'react';
import './Preview.css';

const Preview = ({ target, targetIndex }) => {
    return (
        <div className="Typer">
            <span className="green-text">{target.slice(0, targetIndex)}</span>
            <span className="text">{target.slice(targetIndex)}</span>
        </div>
    );
};

export default Preview;
