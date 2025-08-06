const express = require("express");
const app = express();

let books = [
  {
    id: "b1",
    title: "Book One",
    description: "Description of book one",
    authorId: "a1",
  },
  {
    id: "b2",
    title: "Book Two",
    description: "Description of book two",
    authorId: "a2",
  },
];

let reviews = [
  { id: "r1", text: "Amazing book!", bookId: "b1" },
  { id: "r2", text: "Decent read.", bookId: "b2" },
];

let authors = [
  { id: "a1", name: "Author One", bio: "Bio of Author One" },
  { id: "a2", name: "Author Two", bio: "Bio of Author Two" },
];

// Your routing and controller code goes here

app.get("/books", (request, response) => {
  // get all the posts
  response.send(books);
});

app.get("/books/:id", (req, res) => {
  const book_id = req.params.id;
  // find the post based on the id
  const selected = books.find((p) => p.id === book_id);
  res.send(selected);
});

app.get("/reviews", (request, response) => {
  // get all the posts
  response.send(reviews);
});

app.get("/reviews/:id", (req, res) => {
  const review_id = req.params.id;
  // find the post based on the id
  const selected = reviews.find((p) => p.id === review_id);
  res.send(selected);
});

app.get("/reviews", (request, response) => {
  // get all the posts
  response.send(reviews);
});

app.get("/reviews/:id", (req, res) => {
  const review_id = req.params.id;
  // find the post based on the id
  const selected = reviews.find((p) => p.id === review_id);
  res.send(selected);
});

app.get("/authors", (request, response) => {
  // get all the posts
  response.send(authors);
});

app.get("/authors/:id", (req, res) => {
  const author_id = req.params.id;
  // find the post based on the id
  const selected = authors.find((p) => p.id === author_id);
  res.send(selected);
});

app.listen(5124, () => {
  console.log("Bookstore app is running on port 5124");
});
