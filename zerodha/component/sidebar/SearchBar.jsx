function SearchBar() {
  return (
    <div className="flex items-center bg-[#1e1e1e] p-2 rounded-md">
      <input
        type="text"
        placeholder="Search eg: infy bse, nifty fut, index fund, etc"
        className="bg-transparent flex-1 outline-none text-sm text-white placeholder-gray-400"
      />
      <kbd className="text-gray-500 text-xs ml-2 px-1 border border-gray-500 rounded">Ctrl + K</kbd>
    </div>
  );
}

export default SearchBar;
