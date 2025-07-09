import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchCars = () => {
    return axios.get('http://localhost:4000/cars')
}

export function RQCars() {
    const { isLoading, data, isError, error } = useQuery({
        queryKey: ['cars'],
        queryFn: fetchCars,
    });

    if (isLoading)
        return <h2>Loading...</h2>

    if (error)
        return <h2>{error.message}</h2>

    return (
    <>
        <h2>RQ Cars Page</h2>
        {
            data?.data.map(car => {
                return <div key={car.id}>{car.name}</div>
            })
        }
    </>
)
}