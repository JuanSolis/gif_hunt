import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GiphyApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader title="Buscador de GIFs" description="Encuentra el gif perfect" />

      {/* Search */}

      <SearchBar placeholder="Buscar GIFs" />

      {/* Busquedas Previas */}

      <PreviousSearches searches={["Gato", "Perro"]} />

      {/* GIFs */}
      <h2 className="content-center">GIFs encontrados</h2>
      <GifList gifs={mockGifs} />
      
    </>
  );
};
