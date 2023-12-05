function Numresults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{!movies ? "0" : movies.length}</strong> results
    </p>
  );
}

export default Numresults;
