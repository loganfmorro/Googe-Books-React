import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.books array
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