interface PreviousSearchesProps {
  searches: string[];
}
export const PreviousSearches = ({searches}: PreviousSearchesProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <ul className="flex align-center justify-center flex-wrap gap-2 max-w-[400px]">
        {
            searches.length > 0 ? searches.map((search, index) => (
                <li className="py-1 px-2 border border-[#ccc] rounded-2xl cursor-pointer text-sm" key={index}>{search}</li>
            )) : (
                <li>No hay busquedas previas</li>
            )
        }
      </ul>
    </div>
  );
};
