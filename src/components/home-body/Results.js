import React, {useEffect, useState} from 'react';
import './Results.css';
import VideoCard from './VideoCard'
import axios from '../../API/axios';
import FlipMove from "react-flip-move";
import { useSelector } from 'react-redux';


const Results = ({selectedOption}) => {
    const [movies,setMovies]=useState([]);
    const searchResult=useSelector(state=>state.search);

    useEffect(()=>{
        searchResult.value && axios.get(`/search/movie?api_key=736526407eddab33d53a2e42284a1d01&language=en-US&query=${searchResult.value}`)
            .then(result=>{setMovies(result.data.results);
                console.log(result.data)})
    },[searchResult.value])

    useEffect(()=>{
            axios.get(selectedOption)
                .then(result=>setMovies(result.data.results))
    },[selectedOption])

    return (
        <div className='results'>
            <FlipMove>
                {movies.map((movie) => (
                    <VideoCard key={movie.id} movie={movie}/>
                ))}
            </FlipMove>
        </div>
    );
};

export default Results;