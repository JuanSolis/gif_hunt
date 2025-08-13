import { PreviousSearches } from "../../gifs/components/PreviousSearches";
import { SearchBar } from "./SearchBar";

interface CustomHeaderProps {
  title: string;
  previousTerms: string[];
  onLabelClick: (term:string) => void;
  onHandleSearch: (query: string) => void;
  onClearTerms?: () => void;
}

export const CustomHeader = ({ title, previousTerms, onLabelClick, onHandleSearch, onClearTerms}: CustomHeaderProps) => {
  return (
    <>
      <div className={`flex flex-col items-center justify-center my-4 min-h-fit ${previousTerms.length == 0 ? 'h-[100vh]': 'h-[30vh]' } w-full text-center transition-all duration-300 ease-out py-10`}>
        <h1 className="text-6xl font-bold uppercase bangers-regular">
          {title}
        </h1>
        {/* Search */}

        <SearchBar placeholder="Buscar GIFs" onHandleSearch={onHandleSearch}  />
        {/* Busquedas Previas */}

        <PreviousSearches searches={previousTerms} onLabelClick={onLabelClick} onClearTerms={onClearTerms}/>
      </div>
    </>
  );
};
