const Pagination = ({ prev, next, handlePrevious, handleNext }) => {
  return (
    <nav>
      <ul className="flex justify-between items-center">
        {prev ? (
          <li className="p-4 bg-slate-600 mx-6 my-2 rounded-lg">
            <button onClick={handlePrevious}>Previous</button>
          </li>
        ) : (
          <p className="p-4 bg-slate-800 mx-6 my-2 rounded-lg">
            You're in the first page
          </p>
        )}
        {next ? (
          <li className="p-4 bg-slate-600 mx-6 my-2 rounded-lg">
            <button onClick={handleNext}>Next</button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};
export default Pagination;
