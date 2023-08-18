import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AddBookForm from './AddBookForm';
import BookList from './BookList';
import BookDetails from './BookDetails';
import { Book } from './types'; // Importe o tipo Book de onde ele é definido

function App() {
  const [books, setBooks] = React.useState<Book[]>([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList books={books} />} />
        <Route path="/add" element={<AddBookForm />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
