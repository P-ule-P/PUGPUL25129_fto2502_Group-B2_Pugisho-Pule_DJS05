import React from "react";

/**
 * Search input component for filtering podcasts by title.
 *
 * @component
 * @param {Object} props
 * @param {string} props.value - Current search input value.
 * @param {Function} props.onChange - Callback function to update the search value.
 *
 * @returns {JSX.Element} A controlled search input field.
 */
export default function Search({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search podcasts..."
      className="search-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
