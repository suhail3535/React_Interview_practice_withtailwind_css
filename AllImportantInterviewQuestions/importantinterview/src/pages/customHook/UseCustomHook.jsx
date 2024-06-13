import React from 'react';
import useFetch from './CostumHook';

const DataFetchingComponent = () => {
    const { data, loading} = useFetch('https://fakestoreapi.com/products');

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;

    return (
        <div>




            {loading?(<h1>Loading............</h1>) :(data.map((ele) => {

                return <pre> <div key={ele.id}>
                    <h1>{ele.title}</h1>
                    <h1>{ele.price}</h1>
                    <h1>{ele.description}</h1>
                </div>
                </pre>
            }))}
        </div>
    );
};

export default DataFetchingComponent;
