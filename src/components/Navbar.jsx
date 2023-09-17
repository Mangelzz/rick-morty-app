import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full h-28 bg-blue-950 p-5 text-white max-md:flex-col max-md:h-auto">
      <div className="p-3 bg-gray-900 rounded-lg max-md:mb-3">
        <Link to={"/"} className="text-4xl">
          Rick and morty App
        </Link>
      </div>
      <div className="flex gap-9 p-3">
        <Link
          to={"/"}
          className="bg-gray-900 p-2 rounded-lg hover:bg-gray-950 transition-colors duration-300"
        >
          Characters
        </Link>
        <Link
          to={"/episodes"}
          className="bg-gray-900 p-2 rounded-lg hover:bg-gray-950 transition-colors duration-300"
        >
          Episodes
        </Link>
        <Link
          to={"/contact"}
          className="bg-gray-900 p-2 rounded-lg hover:bg-gray-950 transition-colors duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
