// import { set } from 'mongoose';
import { useState, useEffect } from 'react';
import axios from "axios";
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await axios.get(url)
                setData(res.data)
                setLoading(false)
            } catch (err) {
                console.log(err);
                setLoading(true)
            }



        };

        fetchData();
    }, [url]);

    return { data, loading };
};

export default useFetch;
