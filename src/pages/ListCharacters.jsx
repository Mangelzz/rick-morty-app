import { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList";
import Pagination from "../components/Pagination";

const ListCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

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
  };

  const handleNext = () => {
    getCharacters(info.next);
  };

  return (
    <>
      <Pagination
        prev={info.prev}
        next={info.next}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
      <div className="grid grid-cols-2 justify-between sm:grid-cols-4 gap-8 text-white p-5">
        {characters.map((character) => {
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
