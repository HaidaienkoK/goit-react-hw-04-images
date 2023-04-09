import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import css from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
    
  const [query, setQuery] = useState('');

  const onChangeInput = e => setQuery(e.currentTarget.value);

  const onSubmitForm = e => {
    e.preventDefault();    
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={onSubmitForm}>
        <button className={css.button} type="submit">
          <FaSearch size={14} />
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={onChangeInput}
        />
      </form>
    </header>
  );
}