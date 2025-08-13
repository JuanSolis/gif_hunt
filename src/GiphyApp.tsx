import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";

export const GiphyApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);


  const clearSearches = () => {
    setPreviousTerms([]);
  }
  const handleTermClick = (term: string) => {
    console.log(`Término seleccionado:`, {term});
  }

  const handleSearch = (query: string) => {
    if (query.trim() !== "") {
      const cleanedQuery = query.trim().toLowerCase();
      if (previousTerms.includes(cleanedQuery)) {
        console.log(`El término "${cleanedQuery}" ya está en la lista de búsquedas previas.`);
        return;
      }
      setPreviousTerms([cleanedQuery, ...previousTerms].slice(0, 8));
      console.log(`Buscar GIFs con el término:`, {cleanedQuery});
    }
  }
  
  
  return (
    <>
      {/* Header */}
      <CustomHeader title="Encuentra el GIF perfecto en segundos" previousTerms={previousTerms} onLabelClick={handleTermClick} onHandleSearch={handleSearch} onClearTerms={clearSearches}/>

      {/* GIFs */}
      {
        previousTerms.length > 0 ? (
          <>
          <h2 className="flex justify-center text-3xl font-bold">GIFs encontrados</h2>
          <GifList gifs={mockGifs} />
          </>
        ) : (
         null
        )
      }
      
    </>
  );
};
