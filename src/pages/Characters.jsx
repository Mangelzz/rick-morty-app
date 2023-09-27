import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Characters = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  const getCharacters = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setCharacter(data);
    console.log(data);
  };

  useEffect(() => {
    getCharacters(`https://rickandmortyapi.com/api/character/${id}`);
  }, []);

  const { name, gender, image, species, status, type } = character;
  let origin = "";

  if (character?.origin?.name) {
    origin = character.origin.name;
  }

  const getStatus = () => {
    switch (status) {
      case "Alive":
        return "bg-green-500";
      case "Dead":
        return "bg-red-500";
      default:
        return "bg-gray-900";
    }
  };

  return (
    <>
      <div className="m-9">
        <Link to={-1} className="m-2 p-4 bg-slate-700 rounded-lg">
          Go back
        </Link>
      </div>
      <div className="container flex justify-center items-center text-center mt-28 max-md:mt-10">
        <div className="bg-[#3c3e44] flex rounded-xl justify-center items-center max-md:flex-col max-md:w-52">
          <img
            src={image}
            alt={name}
            className="rounded-bl-xl rounded-tl-xl max-md:rounded-tl-lg max-md:rounded-tr-lg max-md:rounded-bl-none"
          />
          <div className="p-5 w-72">
            <h2 className="text-3xl font-bold p-2">{name}</h2>
            <div className="flex gap-2 justify-center items-center">
              <div className={`${getStatus()} w-3 h-3 rounded-lg p-2`}></div>
              <p>{status} - </p>
              <p>{species}</p>
            </div>
            <p className="p-2">{gender}</p>
            <p>{type}</p>
            <p className="mt-3">
              Origin: <span className="font-bold">{origin}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Characters;
