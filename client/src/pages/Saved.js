import React, { Component } from "react";
import Hero from "../components/Hero";
import API from "../utils/API";
import Results from "../components/Library";

class Saved extends Component {
  state = {
    savedBooks: [],
  }

  componentDidMount() {
    API.savedBooks()
      .then(savedBooks => this.setState({ savedBooks: savedBooks }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <Hero backgroundImage="https://www.nypl.org/sites/default/files/bookcase-1280x720.jpg">
          <h1>(React) Google Book Search</h1>
          <h2>Saved Books</h2>
        </Hero>

        <Container style={{ minHeight: "80%" }}>
          <Row>
            <Col size="md-12">
              <Results results={this.state.savedBooks} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Saved;