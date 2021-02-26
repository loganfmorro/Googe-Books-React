import React from "react";
import Container from "../Container/index";
import Row from "../Row/index";
import Col from "../Col/index";

function BookCard(props) {
    return (
        <div className="card-deck">
            <Container>
                <Row>
                    <Col size="md-4">

                        <div className="card">
                            <img src={props.image} alt="" className="card-img-top" />
                            <div className="card-body">
                                <h2 className="card-title">{props.title}</h2>
                                <h3 className="card-text">{props.author}</h3>
                                <p className="card-text">{props.published}</p>
                                <button onClick={() => props.handleSave(result)}  className="btn btn-primary"> save</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BookCard;