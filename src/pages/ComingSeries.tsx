import {getComingSoon} from "../api"
import {useQuery} from "react-query";
import MovieList from "../components/MovieList";

function ComingSeries () {
   
    const {data,  isLoading} = useQuery({
        queryKey: ['ComingSeries'],
        queryFn: getComingSoon
    });
    
    return (
        <MovieList data={data} />);
}

export default ComingSeries;