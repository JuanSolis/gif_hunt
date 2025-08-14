import Masonry from "react-layout-masonry";
import type { Gif } from "../interfaces/gif.interface";

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
     <div className="p-10 md:p-20">
     <Masonry  columns={{ 640: 3, 1024: 4, 1280: 5 }} gap={10}>
        {gifs.map((gif, index) => (
          <div
            key={gif.title + gif.id}
            className="relative max-w-sm transition-all duration-300 cursor-pointer filter hover:scale-105 hover:brightness-80"
          >
            <img
              className="h-auto max-w-full rounded-lg"
              src={gif.url}
              alt={gif.title}
            />

            <p className={`truncate absolute ${gif.title != "" ? 'w-[90%] rounded-lg p-2 ' : ''} text-xs line-clamp-1  text-white top-0 left-0 bg-black bg-opacity-50 `}>
              {gif.title}
            </p>
          </div>
        ))}
      </Masonry>
     </div>
    </>
  );
};
