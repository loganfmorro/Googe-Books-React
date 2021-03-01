import React, { Component } from "react";
import API from "../utils/API.js";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import Hero from "../components/Hero";
import ResultsList from "../components/SearchResults/index.js";
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
    
      <Hero backgroundImage="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80">
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