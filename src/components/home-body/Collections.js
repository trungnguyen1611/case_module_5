import React, {useEffect, useState} from 'react';
import './Collections.css';
import VideoCard from './VideoCard';
import Button from '@mui/material/Button';
import FlipMove from "react-flip-move";


const Collections = () => {
    const [movies, setMovies] = useState([]);

    const removeMoviesFromWishList = (id) => {
        const newList = movies.filter(element => element.id !== id)
        setMovies(newList);
        localStorage.setItem('wishList', JSON.stringify(newList))
        console.log(`delete item ${id} from localStorage`)
    }

    useEffect(() => {
        let currentWishLish = JSON.parse(localStorage.getItem('wishList')) || [];
        setMovies(currentWishLish)
    }, [])
    return (
        <div className='results'>
            {movies.length === 0 ?
                <h1 style={{color: 'white', textAlign: "center"}}>Your Wish List is Empty....</h1> : ''}
            <FlipMove>
                {movies.map((movie) => (
                    <div key={movie.id} className='card'>
                        <VideoCard movie={movie}/>
                        <Button variant='outlined' className='remove' onClick={() => {
                            removeMoviesFromWishList(movie.id)
                        }}>Remove</Button>
                    </div>
                ))}
            </FlipMove>
        </div>
    );
};

export default Collections;
