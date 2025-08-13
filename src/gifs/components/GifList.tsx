import type { Gif } from "../../mock-data/gifs.mock";

interface GifListProps {
  gifs: Gif[];
}
export const GifList = ({ gifs }: GifListProps) => {
  return (
    <>
      {/* gifs.map((gif, index) => (
      <div key={gif.title} className="gif-card">
        <img src={gif.url} alt={gif.title} />
        <p>{gif.title}</p>
     </div>
     ))   */}

      <div className="px-20 py-10 grid grid-cols-2 md:grid-cols-3 gap-4">
        {gifs.map((gif, index) => (
          <div className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img
              className="h-auto max-w-full rounded-lg"
              src={gif.url}
              alt={gif.title}
            />

            <p className="absolute text-xs text-white top-0 left-0 bg-black bg-opacity-50 p-2 rounded-lg">
              {gif.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
