import React, { useMemo } from 'react'

const UseMemo = ({ data }) => {
    const memodata = useMemo(() => {
        let sum = 0;
        for (let i = 0; i < data.length; i++) {

            sum = sum + data[i]
            
        }
        return sum
    }, [data])

    return (
        <div>
            <h1>Memo</h1>
            {memodata}
        </div>
    )
}

export default UseMemo
