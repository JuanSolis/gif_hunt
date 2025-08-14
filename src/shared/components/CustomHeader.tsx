import { PreviousSearches } from "../../gifs/components/PreviousSearches";
import { Button } from "./button";
import { SearchBar } from "./SearchBar";

interface CustomHeaderProps {
  title: string;
  previousTerms?: string[];
  onLabelClick?: (term: string) => void;
  onHandleSearch?: (query: string) => void;
  onClearTerms?: () => void;
}

export const CustomHeader = ({
  title,
  previousTerms,
  onLabelClick,
  onHandleSearch,
  onClearTerms,
}: CustomHeaderProps) => {
  const titleHeader = title;
  return (
    <div className="w-full flex flex-col h-[92vh] pl-10 md:pl-40 justify-center bg-[#f6f6f6]">
      <div className={`my-4`}>
        <h1 className="text-4xl md:text-6xl font-bold uppercase bangers-regular">
          Encuentra el GIF perfecto
          <br /> en segundos
        </h1>

        {/* Search */}

        {/* <SearchBar placeholder="Buscar GIFs" onHandleSearch={onHandleSearch}  /> */}
        {/* Busquedas Previas */}

        {/* <PreviousSearches searches={previousTerms} onLabelClick={onLabelClick} onClearTerms={onClearTerms}/> */}
      </div>
      <div className="w-[90%] md:w-[60%] lg:w-[40%]">
        <p className="text-md md:text-lg mt-3 mb-5">
          Encuentra el GIF perfecto en segundos. Expresa lo que sientes,
          sorprende a tus amigos y dale vida a tus conversaciones con miles de
          GIFs de cualquier temática.
        </p>
       <Button text="Buscar" textSize="xl" />
      </div>
    </div>
  );
};
