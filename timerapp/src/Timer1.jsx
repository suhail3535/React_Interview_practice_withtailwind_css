import React, { useState, useEffect } from 'react';

const Timer1 = () => {
    const [timer, setTimer] = useState(0);
    const [active, setActive] = useState(false);

    useEffect(() => {
        let interval;
        if (active) {
            interval = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
        }
        else {
            clearInterval(interval);
        }
        // console.log("mounted");
        return () => clearInterval(interval);
    }, [active, timer]);

    const handleStart = () => setActive(true);

    const handleStop = () => setActive(false);

    const handleReset = () => {
        setActive(false);
        setTimer(0);
    };

    return (
        <div>
            <h1>Timer:-{timer}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Timer1;
