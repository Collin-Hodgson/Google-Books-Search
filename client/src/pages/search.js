import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SaveBtn from "../components/SaveBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    API.booksByTitle(search)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    if (search) {
      loadBooks();
    }
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleSave(book) {
    API.saveBook({
      _id: book.id,
      title: book.title,
      author: book.author,
      description: book.description,
      image: book.image,
    });
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Google Book Search</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <FormBtn onClick={handleSearchSubmit}>Search</FormBtn>
          </form>
        </Col>
        <Col size="md-12">
          <Container fluid>
            {books.length ? (
              <List>
                {books.map((book) => (
                  <ListItem key={book._id}>
                    <Container fluid>
                      <Col
                        id={res.id}
                        title={res.title}
                        authors={res.authors}
                        image={res.image}
                        description={res.description}
                      ></Col>
                      <SaveBtn
                        handleSave={handleSave}
                        bookData={bookData}
                      ></SaveBtn>
                    </Container>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
