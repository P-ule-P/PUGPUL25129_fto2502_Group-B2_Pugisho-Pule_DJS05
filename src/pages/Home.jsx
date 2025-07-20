import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Filters } from "../components/Filters";
import PodcastGrid from "../components/PodcastGrid";
import Pagination from "../components/Pagination";
import { fetchAllPodcasts } from "../utils/api";
import { genres } from "../data/genres";

const ITEMS_PER_PAGE = 12;

/**
 * Home page component that displays a searchable, filterable, sortable,
 * and paginated list of podcasts.
 *
 * @component
 * @returns {JSX.Element} The rendered Home component with Header, Filters, Grid, and Pagination.
 */
export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [podcasts, setPodcasts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [searchPodcasts, setSearchPodcasts] = useState(
    searchParams.get("search") || ""
  );
  const [genre, setGenre] = useState(searchParams.get("genre") || "all");
  const [sort, setSort] = useState(searchParams.get("sort") || "recent");
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sync URL parameters when filters change
  useEffect(() => {
    setSearchParams({
      search: searchPodcasts,
      genre,
      sort,
      page: currentPage,
    });
  }, [searchPodcasts, genre, sort, currentPage, setSearchParams]);

  // Initial fetch of podcast data
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAllPodcasts();
        setPodcasts(data);
        setFiltered(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Apply search, filter, and sort on data
  useEffect(() => {
    let result = [...podcasts];

    if (searchPodcasts.trim()) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchPodcasts.toLowerCase())
      );
    }

    if (genre !== "all") {
      result = result.filter((p) => p.genres.includes(Number(genre)));
    }

    if (sort === "title-asc") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "title-desc") {
      result.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort === "recent") {
      result.sort((a, b) => b.updated - a.updated);
    } else if (sort === "oldest") {
      result.sort((a, b) => a.updated - b.updated);
    }

    setFiltered(result);
    setCurrentPage(1);
  }, [searchPodcasts, genre, sort, podcasts]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  return (
    <div>
      <Header
        searchTerm={searchPodcasts}
        setSearchPodcasts={setSearchPodcasts}
      />
      <Filters
        genre={genre}
        setGenre={setGenre}
        sort={sort}
        setSort={setSort}
      />

      {loading && <p className="status">Loading podcasts...</p>}
      {error && <p className="status error">Error: {error}</p>}
      {!loading && !error && filtered.length === 0 && (
        <p className="status">No podcasts found.</p>
      )}

      <PodcastGrid podcasts={currentItems} genres={genres} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
