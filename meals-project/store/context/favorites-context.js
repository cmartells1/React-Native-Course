import { createContext } from 'react';

export const FavortiesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  return <FavortiesContext.Provider>{children}</FavortiesContext.Provider>;
}

export default FavoritesContextProvider;
