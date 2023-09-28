import { create } from "zustand";
import moviesData from '../../assets/datas/data.json'

interface MovieStore {
    initialMovies:Movie[];
    movies: Movie[];
    setMovies: (movies: Movie[]) => void;
    filterByTitle: (query: string) => void;
    filterByTags: (tags: string[]) => void;
}

const useWishlistStore = create<MovieStore>((set) => ({
    initialMovies : moviesData.movie as Movie[],
    movies: moviesData.movie as Movie[],
    setMovies: (movies) => set({ movies }),
    filterByTitle: (query) => {
        set((state) => {
            const filteredByTitleMovies = state.initialMovies.filter((movie) =>
                movie.title.toLowerCase().includes(query.toLowerCase())
            );
          return { movies: filteredByTitleMovies };
        });
    },
    filterByTags: (tags) => {
        set((state) => {
          const filteredMovies = tags.length === 0
            ? state.initialMovies
            : state.initialMovies.filter((movie) =>
                tags.every(tag => movie.categories.includes(tag) || movie.bestQuality === tag)
              );
          return { movies: filteredMovies };
        });
      }
}))

export default useWishlistStore;