import { genres } from "../data/genres";

export function mapGenreIdsToNames(genreIds, allGenres = genres) {
  return genreIds.map((id) => {
    const found = allGenres.find((g) => g.id === id);
    return found ? found.title : "Unknown";
  });
}

export function getGenreById(id) {
  return genres.find((g) => g.id === id) || null;
}
