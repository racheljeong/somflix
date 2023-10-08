import { useQuery} from "react-query";
import { getPopular} from "../api";

import MovieList from "../components/MovieList";
//import { HashtagIcon, StarIcon } from "@heroicons/react/20/solid";
//import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import { faHashtag } from '@fortawesome/free-solid-svg-icons'


//justify-content : flex-end 제일 하단에 오게함



function Home() {
    
    const {data,  isLoading} = useQuery({
        queryKey: ['popularMovies'],
        queryFn: getPopular
    });

    return (
      <MovieList data={data} />
    );

}

export default Home;