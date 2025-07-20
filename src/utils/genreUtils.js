import { genres } from "../data/genres";

/**
 * Maps an array of genre IDs to their corresponding genre names.
 *
 * @param {number[]} genreIds - Array of genre ID numbers.
 * @param {Array} [allGenres=genres] - Optional list of genre objects to search through.
 * @returns {string[]} Array of genre names, or "Unknown" if not found.
 */
export function mapGenreIdsToNames(genreIds, allGenres = genres) {
  return genreIds.map((id) => {
    const found = allGenres.find((g) => g.id === id);
    return found ? found.title : "Unknown";
  });
}

/**
 * Retrieves a genre object by its ID.
 *
 * @param {number} id - Genre ID to look up.
 * @returns {Object|null} Genre object if found, or null if not.
 */
export function getGenreById(id) {
  return genres.find((g) => g.id === id) || null;
}
