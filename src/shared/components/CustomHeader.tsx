import { PreviousSearches } from "../../gifs/components/PreviousSearches";
import { SearchBar } from "./SearchBar";

interface CustomHeaderProps {
  title: string;
}

export const CustomHeader = ({ title }: CustomHeaderProps) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-4 h-[100vh] w-full text-center transition-all duration-300 ease-out">
        <h1 className="text-6xl font-bold uppercase bangers-regular">
          {title}
        </h1>
        {/* Search */}

        <SearchBar placeholder="Buscar GIFs" />
        {/* Busquedas Previas */}

        <PreviousSearches searches={["Gato", "Perro"]} />
      </div>
    </>
  );
};
