import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Filters } from "../components/Filters";
import { PodcastCard } from "../components/PodcastCard";
import { fetchAllPodcasts } from "../utils/api";
import { genres } from "../data/genres";

const ITEMS_PER_PAGE = 12;

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

  // Update URL when state changes
  useEffect(() => {
    setSearchParams({
      search: searchPodcasts,
      genre,
      sort,
      page: currentPage,
    });
  }, [searchPodcasts, genre, sort, currentPage, setSearchParams]);

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

  // Filtering, sorting, searching
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
    setCurrentPage(Number(searchParams.get("page")) || 1);
  }, [searchPodcasts, genre, sort, podcasts]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  return (
    <div>
      <Header setSearchPodcasts={setSearchPodcasts} />
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

      <section className="podcast-grid">
        {currentItems.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} genres={genres} />
        ))}
      </section>

      <div className="pagination">
        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            className={`page-btn ${num + 1 === currentPage ? "active" : ""}`}
            onClick={() => setCurrentPage(num + 1)}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
