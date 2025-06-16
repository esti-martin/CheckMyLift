export const FAVORITES_KEY = "myAppFavorites";

export function getFavoritesFromStorage(): string[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveFavoritesToStorage(favorites: string[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}