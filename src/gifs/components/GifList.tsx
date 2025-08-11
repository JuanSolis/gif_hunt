import type { Gif } from "../../mock-data/gifs.mock";

interface GifListProps {
    gifs: Gif[];
}
export const GifList = ({gifs} : GifListProps) => {
  return (
    <div className="gifs-container ">
    {
     gifs.map((gif, index) => (
       <div key={gif.title} className="gif-card">
         <img src={gif.url} alt={gif.title} />
         <p>{gif.title}</p>
       </div>
     ))  
    }
   </div>
  )
}
