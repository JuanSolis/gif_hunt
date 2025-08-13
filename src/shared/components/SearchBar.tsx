import { useEffect, useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onHandleSearch: (query: string) => void;
}

export const SearchBar = ({ placeholder = "Buscar GIFs", onHandleSearch }: SearchBarProps) => {

  const [searchValue, setSearchValue] = useState("")
  

  const handleSearch = () => {
    onHandleSearch(searchValue);
    setSearchValue(""); //
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      handleSearch();
    }, 700);

    return () => {
      clearTimeout(timeOutId);
    }

  }, [searchValue, onHandleSearch]);

  return (
    <>
      <div className="w-fit mt-10 mb-5 flex  justify-center items-center gap-2">
        <label
          htmlFor="default-search"
          className="mb-2 text-lg font-medium text-gray-900 sr-only"
        >
          Buscar
        </label>
          
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            autoFocus
            type="search"
            id="default-search"
            className="block w-[60%] p-4 ps-10 text-5xl text-gray-900 outline-none focus "
            placeholder={placeholder}
            onKeyDown={(e) => {
              handleKeyDown(e);
            }}

          />
          <button
            onClick={handleSearch}
            className="text-white  bg-[#333] hover:bg-[#000]font-medium rounded-lg text-lg px-4 py-2 flex items-center justify-center cursor-pointer"
          >
            Buscar
          </button>
        </div>
    </>
  );
};
