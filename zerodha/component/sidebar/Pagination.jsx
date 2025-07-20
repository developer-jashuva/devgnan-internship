function Pagination() {
  const pages = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="flex justify-center mt-6 space-x-4 text-gray-400">
      {pages.map((num, idx) => (
        <button
          key={idx}
          className={`px-2 py-1 rounded ${
            num === 1 ? "border-b-2 border-orange-500 text-white" : ""
          }`}
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
