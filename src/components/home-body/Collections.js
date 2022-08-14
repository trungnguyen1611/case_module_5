import React, {useEffect, useState} from 'react';
import VideoCard from './VideoCard'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FlipMove from "react-flip-move";

const Collections = () => {
    const [movies,setMovies]=useState([]);

    useEffect(() => {
        let currentWishLish = JSON.parse(localStorage.getItem('wishList')) || [];
        setMovies(currentWishLish)
        console.log(currentWishLish)
    },[])
    return (
        <div className='results'>
            <FlipMove>
                {movies.map((movie) => (
                    <div key={movie.id}>
                    <VideoCard  movie={movie}/>
                    <Button variant="text">Remove</Button>
                    </div>
                ))}
            </FlipMove>
        </div>
    );
};

export default Collections;