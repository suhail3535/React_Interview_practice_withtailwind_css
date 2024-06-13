import React, { useRef } from 'react';

function MyComponent () {
    const myRef = useRef();
    const handleClick = () => {
        myRef.current.innerText = "Hello from suhail khan"
        myRef.current.style.backgroundColor = "yellow"
    }
    return (
        <>

            <div ref={myRef}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, rerum.
            </div>
            <button onClick={handleClick} style={{ backgroundColor: "red" }}>Submit</button>
        </>
    );
}
export default MyComponent