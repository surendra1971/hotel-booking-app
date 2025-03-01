import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        axios.get('http://<your-ec2-public-ip>:5000/api/hotels') // Update API URL
            .then(response => {
                setHotels(response.data);
            })
            .catch(error => {
                console.error('Error fetching hotels:', error);
            });
    }, []);

    return (
        <div>
            <h1>Available Hotels</h1>
            <ul>
                {hotels.map(hotel => (
                    <li key={hotel.id}>
                        <strong>{hotel.name}</strong> - {hotel.location} - ${hotel.price_per_day}/day - ⭐ {hotel.rating}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
