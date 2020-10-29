import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";

function Detail(props) {
  const [res, books, setBook] = useState({});

  useEffect(() => {
    setBook();
  }, []);

  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => setBook())
      .catch((err) => console.log(err));
  }

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const { id } = useParams();
  useEffect(() => {
    API.getBook(id)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Google Book Search</h1>
          </Jumbotron>
        </Col>
        <Col size="md-12">
          <Container fluid>
            {books.length ? (
              <List>
                {books.map((books) => (
                  <ListItem key={books._id}>
                    <Container fluid>
                      <Col
                        id={res.id}
                        title={res.title}
                        authors={res.authors}
                        image={res.image}
                        description={res.description}
                      ></Col>
                      <DeleteBtn deleteBook={deleteBook} id={id}></DeleteBtn>
                    </Container>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>You have no saved any books</h3>
            )}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
