import React from "react";
import "../styles/SearchResults.css";
import PropTypes from "prop-types";

const SearchResults = ({ results }) => {
  return results ? (
    results.map((result) => {
      return (
        <>
          <div className="card-image">
              <img
                className="image"
                src={result}
                alt="Search results from database"
              />
          </div>
        </>
      );
    })
  ) : (
    <p>No results found.</p>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;