import { useState, useEffect } from "react";
import axios from "axios";

export function Cars() {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    
    useEffect(() => {
        axios.get('http://localhost:4000/cars').then((res) => {
            setData(res.data);
            setIsLoading(false);
        })
    }, []);

    if (isLoading)
        return <h2>Loading...</h2>

    return (
        <>
            <h2>{data.map((car) => {
                return <div key={car.id}>{car.name}</div>
            })}</h2>
        </>
    )
}