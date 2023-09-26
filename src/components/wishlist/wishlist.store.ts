import { create } from "zustand";
import moviesData from '../../assets/datas/data.json'

interface MovieStore {
    initialMovies:Movie[];
    movies: Movie[];
    setMovies: (movies: Movie[]) => void;
    filterMovies: (query: string) => void;
}

const useWishlistStore = create<MovieStore>((set) => ({
    initialMovies : moviesData.movie as Movie[],
    movies: moviesData.movie as Movie[],
    setMovies: (movies) => set({ movies }),
    filterMovies: (query) => {
        set((state) => {
            const filteredMovies = state.initialMovies.filter((movie) =>
                movie.title.toLowerCase().includes(query.toLowerCase())
            );
          return { movies: filteredMovies };
        });
      }
}))

export default useWishlistStore;