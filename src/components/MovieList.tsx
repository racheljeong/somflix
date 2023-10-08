
import {Row, BackRow, Box, Wrapper, BoxVariants, infoVariants, Info,Slider} from "../movieStyle/MovieStyle"
import {makeImagePath, IMovieDetail} from "../api";
import {AnimatePresence, useScroll} from "framer-motion";
import {useEffect, useState} from "react";
import MovieDetail from "./MovieDetail";

interface IMovieProp {
    data: IMovieDetail;
  }

function MovieList({ data } : IMovieProp) {
    const [movieId, setMovieId] = useState(0);  
  
    const onBoxClicked = (movieId :number) => {
        setMovieId(movieId);
    }

    // const clickedMovie = (movieId : number) => {
    //   data?.results.map((one) => one.id === movieId);
    // };


    return (
        <Wrapper>
        <>
        <Slider>
        <BackRow>
        <Row>
        { data && data?.results.map((movie) => (
            <Box 
                key={movie.id} 
                layoutId={movie.id + ""}
                whileHover="hover"
                initial="normal"
                variants={BoxVariants}
                transition={{type : "tween"}}
                onClick={() => onBoxClicked(movie.id)}
                bgPhoto={makeImagePath(movie.backdrop_path)}
                >
                <Info variants={infoVariants}>
                <h4>{movie.title}</h4>
             </Info>
            </Box>
        ))}
        
        </Row>
        </BackRow>
        </Slider>  
        <AnimatePresence>
        {movieId !== 0 && (
          <MovieDetail movieId={movieId} setMovieId={setMovieId}/>
        )}
      </AnimatePresence>
        </>
       </Wrapper>

    );


}


export default MovieList;