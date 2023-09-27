import { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList";
import Pagination from "../components/Pagination";

const ListCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [search, setSearch] = useState("");

  const getCharacters = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setCharacters(data.results);
    setInfo(data.info);
    console.log(info);
  };

  useEffect(() => {
    getCharacters("https://rickandmortyapi.com/api/character");
  }, []);

  const handlePrevious = () => {
    getCharacters(info.prev);
    setSearch("");
  };

  const handleNext = () => {
    getCharacters(info.next);
    setSearch("");
  };

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  // Filter
  let results = [];
  if (!search) {
    results = characters;
  } else {
    results = characters.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <>
      <form className="flex justify-center items-center">
        <input
          className="m-8 w-60 h-16 p-2 rounded-lg text-white border-none bg-slate-800 outline-none"
          type="text"
          placeholder="Search a character in this page"
          value={search}
          onChange={searcher}
        />
      </form>
      <Pagination
        prev={info.prev}
        next={info.next}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
      <div className="grid grid-cols-2 justify-between sm:grid-cols-4 gap-8 text-white p-5">
        {results.map((character) => {
          const { id, name, status, species, image } = character;
          return (
            <CharacterList
              key={id}
              name={name}
              status={status}
              species={species}
              image={image}
              id={id}
              location={character.location.name}
            />
          );
        })}
      </div>
      <Pagination
        prev={info.prev}
        next={info.next}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </>
  );
};
export default ListCharacters;
