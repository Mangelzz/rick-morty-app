import { useParams } from "react-router-dom";

const Characters = () => {
  const { id } = useParams();
  return <div>Characters</div>;
};
export default Characters;
