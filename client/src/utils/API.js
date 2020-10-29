import axios from "axios";
const apiKey = ":keyes&key=AIzaSyDJEz5DNEa7Bho8eTiNP35kQECpqnKs9i8";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  booksByTitle: function (search) {
    return axios.get(URL + search + apiKey).then((res) => {
      return {
        id: res.id,
        title: res.volumeInfo.title,
        author: res.volumeInfo.author,
        image: res.imageLinks.thumbnail,
        link: res.selfLink,
      };
    });
  },
};

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
};
