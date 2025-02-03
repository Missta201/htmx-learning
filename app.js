import express from 'express';
import createHomepageTemplate from './views/index.js';
import createListTemplate from './views/list.js';
import createBookTemplate from './views/book.js';
import createEditFormTemplate from './views/edit.js';


import BOOKS_DATA from './data/data.js';

// create app
// Middleware to parse form data
const app = express();
app.use(express.urlencoded({extended: false}));

// static assets
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.send(createHomepageTemplate());
});

app.get('/books', (req, res) => {
  res.send(createListTemplate());
});

app.post('/books', (req, res) => {
  const {title, author} = req.body;
  const id = Math.random().toString();

  BOOKS_DATA.push({id, title, author});

  res.redirect(`/books/${id}`);
});


app.get('/books/:id', (req, res) => {
  const{id} = req.params;
  const book = BOOKS_DATA.find((book) => book.id === id);

  res.send(createBookTemplate(book));

});


app.delete('/books/:id', (req, res) => {
  const id = req.params.id;
  const index = BOOKS_DATA.findIndex((book) => book.id === id);
  BOOKS_DATA.splice(index, 1);

  res.send();
});

app.get('/books/edit/:id', (req, res) => {
  const book = BOOKS_DATA.find((book) => book.id === req.params.id);

  res.send(createEditFormTemplate(book));
});

// listen to port
app.listen(3000, () => {
  console.log('App listening on port 3000');
});