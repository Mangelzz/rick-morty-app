import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Contact from "./pages/Contact";
import ListCharacter from "./pages/ListCharacters";
import Pagination from "./components/Pagination";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<ListCharacter />} />
        <Route path="/characters/:id" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
export default App;
