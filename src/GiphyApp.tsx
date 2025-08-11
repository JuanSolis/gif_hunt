import { GifList } from "./gifs/components/GifList";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";

export const GiphyApp = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader title="Encuentra el GIF perfecto en segundos" />

      {/* GIFs */}
      <h2 className="flex justify-center text-3xl font-bold">GIFs encontrados</h2>
      <GifList gifs={mockGifs} />
      
    </>
  );
};
