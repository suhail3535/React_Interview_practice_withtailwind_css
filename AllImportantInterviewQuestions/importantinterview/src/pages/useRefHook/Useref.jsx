import React, { useState, useRef } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const increment = () => {
        countRef.current += 1;
        setCount(countRef.current);
    };

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <p >Current count: {count}</p>
        </div>
    );
};

export default Counter;
