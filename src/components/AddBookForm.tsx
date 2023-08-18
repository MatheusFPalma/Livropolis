import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

function AddBookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validações
    if (!title || !author || !year || !genre || !description) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    const currentYear = new Date().getFullYear();
    if (parseInt(year) > currentYear) {
      setError('Ano de publicação não pode ser no futuro');
      return;
    }

    // Criação do objeto do livro
    const newBook = {
      id: uuidv4(),
      title,
      author,
      year,
      genre,
      description,
      createdAt: new Date().toISOString(),
    };

    // Aqui você pode chamar uma função para adicionar o livro à coleção
    // Por enquanto, vamos apenas imprimir o novo livro no console
    console.log('Novo Livro:', newBook);
  };

  return (
    <div>
      <h2>Adicionar Novo Livro</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Título:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Autor:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />

        <label>Ano de Publicação:</label>
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />

        <label>Gênero:</label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />

        <label>Descrição:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <button type="submit">Adicionar Livro</button>
      </form>
      {/* Utilizando o componente Link para voltar à lista de livros */}
      <Link to="/">Voltar à Lista</Link>
    </div>
  );
}

export default AddBookForm;
