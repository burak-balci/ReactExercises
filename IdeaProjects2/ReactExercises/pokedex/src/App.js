import "./index.css";
import Card from "./components/Card";
import Searchbar from "./components/Searchbar";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const initPokemon = () => {
      for (let i = 1; i < 101; i++) {
        fetchData(i);
      }
    };

    const fetchData = async (id) => {
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setData((prev) => [...prev, result.data]);
      setIsLoading(false);
    };

    initPokemon();
  }, [Card]);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  const filteredPoke = data.filter((poke) => {
    return poke.name.indexOf(search) !== -1;
  });

  return (
    <div className="py-5">
      <Searchbar search={search} handleChange={handleChange} />
      <div className="grid grid-cols-5 m-6 justify-center">
        {filteredPoke.length > 0 ? (
          filteredPoke.map((data, i) => (
            <div key={i}>
              <Card data={data} />
            </div>
          ))
        ) : filteredPoke.length === 1 ? (
          <Card data={filteredPoke} />
        ) : isLoading === false ? (
          <div className="flex justify-center">
            <div></div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
