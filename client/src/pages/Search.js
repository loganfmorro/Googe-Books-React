import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import Hero from "../components/Hero";
import ResultsList from "../components/SearchResults/index";
import Row from "../components/Row";
import Col from "../components/Col";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: []
    };
  }

  componentDidMount() {
   this.searchBook();
  }
  

  searchBook = query => {
    API.getBook(query)
    // .then(res => console.log(res.data))
    .then(res => this.setState({ results: [...res.data.items] }))
    .catch(err => console.error(err));
};


handleSearch = (e) => {
  this.setState({ search: e.target.value })
}
handleFormSubmit = event => {
  event.preventDefault();
  this.searchBook(this.state.search);
  
};

render() {
  return (

    <div>
      <Hero backgroundImage="https://www.nypl.org/sites/default/files/bookcase-1280x720.jpg">
        <h1>(React) Google Book Search</h1>
        <h2>Search for and save Books of Interest</h2>
      </Hero>

      <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">Book Search</h1>
        <SearchForm
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
          handleFormSubmit={this.handleFormSubmit}
        />
       <Row>
         <Col size="md-12">
         <ResultsList results={this.state.results}/>
         </Col>
       </Row>
      </Container>

    </div>
  )
}
}

export default Search;