import React from 'react';
import { Link } from 'react-router-dom';

interface Book {
  id: string;
  title: string;
  author: string;
  year: string;
}

interface BookListProps {
  books: Book[];
}

function BookList({ books }: BookListProps) {
  return (
    <div>
      <h2>Lista de Livros</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>Título:</strong> {book.title} |{' '}
            <strong>Autor:</strong> {book.author} |{' '}
            <strong>Ano de Publicação:</strong> {book.year}
            {/* Adicione um link para visualizar mais detalhes do livro */}
            <Link to={`/book/${book.id}`}>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;

