import { BigCover, BigMovie, BigOverview, BigRate, BigReleaseDate, BigTitle,
    Overlay, Genre} from "../movieStyle/MovieStyle";

import {makeImagePath, IMovieDetail, getMovie} from "../api";
import {AnimatePresence,useScroll} from "framer-motion";
import {useQuery} from "react-query";
import {useState} from "react";

interface IDetailProps {
    movieId: number;
    setMovieId: React.Dispatch<React.SetStateAction<number>>;
  }


function MovieDetail ({movieId, setMovieId} : IDetailProps) {

    const {data, isLoading} = useQuery <IMovieDetail> ({
        queryKey: ["getMovie", movieId],
        queryFn: () => getMovie(movieId + "")
        
    });
   
    const onOverlayClicked = () => setMovieId(0);
    const { scrollY } = useScroll();

    return (
            <>
            <Overlay 
                onClick={onOverlayClicked}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}  
            />
              <BigMovie 
                
                style={{top: scrollY.get() + 100, backgroundColor :`linear-gradient(to top,black,transparent)`}}  
                layoutId={movieId + ""}>
                {data && (
                    <>
                    <BigCover style={{backgroundImage: `linear-gradient(to top,black,transparent), 
                                                        url(${makeImagePath(data.backdrop_path)})`}} />
                    <BigTitle>{data.title}</BigTitle>
                    <Genre>{data.genres.map((genre)=> `#`+genre.name+" ")}</Genre>
                    <BigOverview>{data.overview}</BigOverview>
                    <BigReleaseDate>Release Date : {data.release_date}</BigReleaseDate>
                    <BigRate>Rate : {Math.round(data.vote_average)}</BigRate>
                    </>
                 )}
              </BigMovie>
              </>
    );
}

export default MovieDetail;