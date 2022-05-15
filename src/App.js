import { useEffect, useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import MovieCard from "./component/MovieCard";
import Filter from './component/Filter'
function App() {
  const [movie, setMovie] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8a6b870a9e30bcf8d020c0408de4bffd`)
          .then(res => res.json())
          .then(data => (setMovie(data.results), setFilter(data.results)))
  }, [])

  return (
    <div className="App">
    <Filter popular={movie} setFiltered={setFilter} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
    <div className="row w-75 mx-auto my-30px">
    {
      filter.map(elem => (
       <MovieCard key={elem.id} movie={elem}/>
      ))
    }
    </div>
    <Footer/>
    </div>
  );
}

export default App;
