import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hook/useFetch";
import {useTitle} from '../hook/useTitle'

export const Search = ({ apipath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(apipath, queryTerm);

  const pageTitle= useTitle(`Search Result ${queryTerm}`)

  return (
    <main>
      <section className="py-7" >
        <p className="tex-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `no movie found "${queryTerm}"`
            : `Result for "${queryTerm}"`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
