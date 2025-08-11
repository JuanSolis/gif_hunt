export const GiphyApp = () => {
  return (
    <>
      {/* Header */}
      <div className="content-center">
        <h1>Buscador de GIFs</h1>
        <p>Encuentra el gif perfect</p>
      </div>

      {/* Search */}

      <div className="search-container">
        <input type="text" placeholder="Buscar GIFs" />
        <button>Buscar</button>
      </div>

      {/* Busquedas Previas */}

      <div className="previous-searches">
        <h2>Busquedas recientes</h2>
        <ul className="previous-searches-list">
          <li>Gatos</li>
          <li>Perros</li>
        </ul>
      </div>
    </>
  );
};
