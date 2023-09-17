import { Link } from "react-router-dom";

const CharacterList = ({ id, name, status, species, image, location }) => {
  const getStatus = () => {
    switch (status) {
      case "Alive":
        return "bg-green-500";
      case "Dead":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Link
      to={`/characters/${id}`}
      className="p-3 bg-blue-950 rounded-lg hover:scale-105 transition-transform duration-300 max-md:w-40"
    >
      <div>
        <img src={image} alt={name} className="rounded-lg mx-auto" />
      </div>
      <div className="text-center p-2">
        <p className="font-bold text-2xl max-md:text-xl">{name}</p>
        <p className="m-1 font-bold border-b-2 border-blue-400 w-max mx-auto max-md:w-auto text-sm">
          {location}
        </p>
        <p className="m-2">Specie: {species}</p>
        <p
          className={`${getStatus()} w-max mx-auto p-1 rounded-lg m-1 font-bold`}
        >
          {status}
        </p>
      </div>
    </Link>
  );
};
export default CharacterList;
