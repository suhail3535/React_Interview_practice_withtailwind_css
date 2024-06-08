import React, { useState, useRef } from 'react';

const Timer2 = () => {
    const [timer, setTimer] = useState(0);
    const [active, setActive] = useState(false);
    const intervalRef = useRef(null);

    const handleStart = () => {
        if (!active) {
            setActive(true);
            intervalRef.current = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
        }
    };

    const handleStop = () => {
        if (active) {
            clearInterval(intervalRef.current);
            setActive(false);
        }
    };

    const handleReset = () => {
        clearInterval(intervalRef.current);
        setTimer(0);
        setActive(false);
    };

    return (
        <div>
            <h1>{timer}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Timer2;
