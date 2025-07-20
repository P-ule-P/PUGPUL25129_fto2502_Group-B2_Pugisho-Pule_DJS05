/**
 * Fetches all podcasts from the API.
 *
 * @async
 * @function fetchAllPodcasts
 * @throws {Error} If the HTTP response is not OK
 * @returns {Promise<Object[]>} Array of podcast objects
 */
export async function fetchAllPodcasts() {
  const response = await fetch("https://podcast-api.netlify.app/");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

/**
 * Fetches a specific show by its ID from the API.
 *
 * @async
 * @function fetchShowById
 * @param {string|number} id - The ID of the podcast show to fetch
 * @throws {Error} If the HTTP response is not OK
 * @returns {Promise<Object>} Podcast show data
 */
export async function fetchShowById(id) {
  const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}
