interface PreviousSearchesProps {
  searches: string[];
  onLabelClick: (term: string) => void;
  onClearTerms?: () => void;
}
export const PreviousSearches = ({searches, onLabelClick, onClearTerms}: PreviousSearchesProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <ul className="flex items-center justify-center flex-wrap gap-2 max-w-[500px]">
        {
          searches.length > 0 && 
          <div onClick={() => {
            if (onClearTerms) {
              onClearTerms();
            }
          }} className="bg-black text-white py-2 px-4 border border-[#ccc] rounded-2xl cursor-pointer text-sm md:text-lg hover:bg-gray-900">
            limpiar busquedas
          </div>
        }
        {
            searches.length > 0 ? searches.map((search, index) => (
                <li onClick={() => {
                  if (onLabelClick) {
                    onLabelClick(search);
                  }
                }} className="bg-white py-2 px-4 border border-[#ccc] rounded-2xl cursor-pointer text-sm md:text-lg hover:bg-gray-50"   key={index}>{search}</li>
            )) : (
                null
            )
        }
      </ul>
    </div>
  );
};
