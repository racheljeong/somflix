import { useQuery, QueryKey } from "react-query";
import { getNowPlaying} from "../api";
import MovieList from "../components/MovieList";


function NowPlaying () {

    const {data,  isLoading} = useQuery({
        queryKey: ['nowPlayingSeries'],
        queryFn: getNowPlaying
    });
   
    return  (
        <MovieList data={data} />);
}

export default NowPlaying;