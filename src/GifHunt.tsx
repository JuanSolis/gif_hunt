import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { CustomHeader } from "./shared/components/CustomHeader";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";
import { HeaderBar } from "./shared/components/HeaderBar";

export const GifHunt = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);


  const clearSearches = () => {
    setPreviousTerms([]);
  }
  const handleTermClick = (term: string) => {
    console.log(`Término seleccionado:`, {term});
  }

  const handleSearch = async (query: string) => {
    if (query.trim() !== "") {
      const cleanedQuery = query.trim().toLowerCase();
      if (previousTerms.includes(cleanedQuery)) {
        console.log(`El término "${cleanedQuery}" ya está en la lista de búsquedas previas.`);
        return;
      }
      setPreviousTerms([cleanedQuery, ...previousTerms].slice(0, 8));
      const giphyResponse =  await getGifsByQuery(cleanedQuery);
      setGifs(giphyResponse);
    }
  }
  
  
  return (
    <>
      {/* Header Bar */}
      <HeaderBar/>
      {/* Header */}
      <CustomHeader title="" previousTerms={previousTerms} onLabelClick={handleTermClick} onHandleSearch={handleSearch} onClearTerms={clearSearches}/>

      {/* GIFs */}
      {
        previousTerms.length > 0 ? (
          <>
          <h2 className="flex justify-center text-3xl font-bold">GIFs encontrados</h2>
          <GifList gifs={gifs} />
          </>
        ) : (
         null
        )
      }
      
    </>
  );
};
