interface PreviousSearchesProps {
  searches: string[];
}
export const PreviousSearches = ({searches}: PreviousSearchesProps) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas recientes</h2>
      <ul className="previous-searches-list">
        {
            searches.length > 0 ? searches.map((search, index) => (
                <li key={index}>{search}</li>
            )) : (
                <li>No hay busquedas previas</li>
            )
        }
      </ul>
    </div>
  );
};
