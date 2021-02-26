import React from "react";
import "./style.css";

// this will let us use autofills based on data suggestions
function SearchForm(props) {
  return (
    <div className="search">
      <form onSubmit ={ props.searchBook} action="" className="search">
      <input onChange={props.handleSearch} type="text"/>
      <button onClick={props.handleFormSubmit} type="submit" className="search"> Search</button>
      </form>
    </div>
  );
}

export default SearchForm;