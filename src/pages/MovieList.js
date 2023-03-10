import { Card } from "../components";
import { useFetch } from "../hook/useFetch";
import {useTitle} from '../hook/useTitle'

export const MovieList = ({apipath,title}) => {
  //const [movies, setMovies] = useState([]);

  const { data: movies } = useFetch(apipath);

 const pageTitle= useTitle(title)

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-center">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
