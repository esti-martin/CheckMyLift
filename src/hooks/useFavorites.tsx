import { useState } from "react";

function useFavorites() {
  const [favorites, setFavorites] = useState<{ [id: string]: boolean }>({});

  //el doble signo de exclamación !! para convertir cualquier valor a booleano. si favorites["a1"] es true, devuelve true; si es undefined o false, devuelve false.
  const isFavorite = (id: string) => !!favorites[id];

  //Alterna el estado de favorito de un elemento. Recibe un ID y cambia su valor de favorito a lo contrario (true/false).
  const toggleFavorite = (id: string) => {
    setFavorites(favs => ({
      ...favs,
      [id]: !favs[id]
    }));
  };

  return { isFavorite, toggleFavorite };
}

export default useFavorites;