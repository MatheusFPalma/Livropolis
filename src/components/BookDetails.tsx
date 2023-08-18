import React from 'react';
import { Link } from 'react-router-dom';

interface Book {
  id: string;
  title: string;
  author: string;
  year: string;
  genre: string;
  description: string;
}

interface BookDetailsProps {
  book: Book;
}

function BookDetails({ book }: BookDetailsProps) {
  return (
    <div>
      <h2>Detalhes do Livro</h2>
      <p><strong>Título:</strong> {book.title}</p>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Ano de Publicação:</strong> {book.year}</p>
      <p><strong>Gênero:</strong> {book.genre}</p>
      <p><strong>Descrição:</strong> {book.description}</p>

      {/* Botão para retornar à lista de livros */}
      <Link to="/">Voltar à Lista</Link>
    </div>
  );
}

export default BookDetails;
