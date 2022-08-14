import React, {forwardRef, useState, useEffect} from 'react';
import './VideoCard.css';
import TextTruncate from "react-text-truncate";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({movie}, ref) => {
    let currentWishLish = JSON.parse(localStorage.getItem('wishList')) || [{id:0}];
    let isInWishList = currentWishLish.findIndex(element => element.id === movie.id);
    const [heart, setHeart] = useState(isInWishList !== -1 ? true : false)
    const changeHeart=()=>{
        setHeart(!heart)
    }
    
    useEffect(() => {
        let wishLish = JSON.parse(localStorage.getItem('wishList')) || []
        let isInWishList = wishLish.findIndex(element => element.id === movie.id);
        if (heart && isInWishList === -1) {
            wishLish.push(movie)
            localStorage.setItem('wishList', JSON.stringify(wishLish));
            console.log(`add items ${movie.id} in to localStorage`)
        } else if (!heart && isInWishList !== -1){
            let newList = wishLish.filter(element => element.id !== movie.id);
            localStorage.setItem('wishList', JSON.stringify(newList))
            console.log(`remove item ${movie.id} from localStorage`)
        }
    },[heart])

    return (
        <div ref={ref} className='videoCard'>
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt=""/>
            <TextTruncate
                line={1}
                element="p"
                truncateText="..."
                text={movie.overview}
            />
            <h2>{movie.tittle || movie.original_title}</h2>
            <p className='videoCard_stats'>
                {/*{movie.media_type && `${movie.media_type}`}*/}
                {movie.release_date || movie.first_air_date}
                <br/>
                <ThumbUpIcon/>{" "}
                {movie.vote_count}
            </p>
            <span className='heart' onClick={changeHeart}>
                {heart ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
            </span>
        </div>
    );
});

export default VideoCard;