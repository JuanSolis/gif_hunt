interface SearchBarProps {
  placeholder?: string;
}

export const SearchBar = ({ placeholder = "Buscar GIFs" }: SearchBarProps) => {
  return (
    <>
      <div className="w-xs mx-auto mt-10 mb-5">
        <label
          htmlFor="default-search"
          className="mb-2 text-lg font-medium text-gray-900 sr-only"
        >
          Buscar
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-lg text-gray-900 outline-none"
            placeholder={placeholder}
            required
          />
          <button
            className="text-white absolute end-2.5 bottom-2.5 bg-[#333] hover:bg-[#000]font-medium rounded-lg text-sm px-4 py-2 "
          >
            Buscar
          </button>
        </div>
      </div>
    </>
  );
};
