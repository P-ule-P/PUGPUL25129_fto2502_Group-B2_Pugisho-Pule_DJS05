import React from "react";

/**
 * Pagination component to navigate through pages of podcast results.
 *
 * @component
 * @param {Object} props
 * @param {number} props.currentPage - The currently active page number.
 * @param {number} props.totalPages - Total number of pages available.
 * @param {Function} props.onPageChange - Callback to update the current page when a new one is selected.
 * @returns {JSX.Element|null} The rendered Pagination component or null if only one page exists.
 */
export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      {[...Array(totalPages).keys()].map((num) => (
        <button
          key={num}
          className={`page-btn ${num + 1 === currentPage ? "active" : ""}`}
          onClick={() => onPageChange(num + 1)}
        >
          {num + 1}
        </button>
      ))}
    </div>
  );
}
