import React, { useState } from 'react'

const colours = ["red", "green", "yellow", "blue", "cyan", "pink", "lightgreen"]
const Randombg = () => {
    const [background, setBackground] = useState("")

    const handleClick = () => {
        let genratedBg = Math.floor(Math.random() * colours.length)
        setBackground(colours[genratedBg])
        console.log(genratedBg);
    }
    return (
        <div>
            <h1 className='text-center text-2xl m-5'>Random Background Genrator</h1>
            <div className='w-[50%] m-auto p-6 border-2  font-bold border-black text-justify' style={{ backgroundColor: background }}>
                <h1 className='text-center m-5 text-2xl'>Genrated Background colour is:- {background}</h1>

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, culpa
                laborum cumque rem quasi velit perferendis voluptates quas voluptatem asperiores eligendi in nemo nulla iure harum recusandae vero facere consequatur.
                Doloremque explicabo consequuntur dignissimos repellendus fugiat
                aliquam voluptatibus laborum porro eum, cum, natus optio, laboriosam ullam. Adipisci reiciendis ipsum sed commodi, debitis rerum neque doloremque cumque explicabo, iusto laboriosam odit!</div>

            <button onClick={handleClick} className="px-5 py-3 w-1/4 font-bold flex justify-center items-center m-auto mt-5 bg-black text-white rounded-sm">Genrate Background is {background}</button>
        </div>
    )
}

export default Randombg
