import { useState } from 'react';

type Props = {
  submitSearch : (location: string) => Promise<void>
}

const Search = ({ submitSearch }: Props) => {
  const [location, setLocation] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!location) return;
    submitSearch(location);
  };

  return (
    <form onSubmit={onSubmit} id='search-container'>
      <input
        type='text'
        id='searchInput'
        placeholder='Search location'
        maxLength={50}
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
      <button type='submit' id='searchButton'>
        SEARCH
      </button>
    </form>
  );
};

export default Search;
