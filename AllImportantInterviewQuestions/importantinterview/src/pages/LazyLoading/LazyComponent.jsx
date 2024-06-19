// LazyComponent.js
import React, { useEffect, useState } from 'react';
import axios from "axios"
const LazyComponent = () => {
    const[data,setData]=useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await axios.get("https://fakestoreapi.com/products");
                setData(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])
    return <div>
        {data.map((ele) => {
            return <div>
                <ul>
                    {/* <li><img src={ele.image} alt="" /></li> */}
                    <li>{ele.title }</li>
                    <li>{ele.price }</li>
        </ul>
    </div>
})}


    </div>;
};

export default LazyComponent;
