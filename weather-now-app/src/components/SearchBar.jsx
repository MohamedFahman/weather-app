export default function SearchBar({ input, onInputChange, onSearch }) {
  return (
    <form onSubmit={onSearch} className="mb-6 w-full max-w-md flex">
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-xl focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-r-xl hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}
