import "./styles.css";

export const Input = ({ searchValue, handleChange }) => {
  return (
    <input
      placeholder="Type your search..."
      className="text-input"
      type="search"
      onChange={handleChange}
      value={searchValue}
    />
  );
};
