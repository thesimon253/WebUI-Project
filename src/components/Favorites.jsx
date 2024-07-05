import FavoriteCards from "./FavoriteCards";
import "../scss/Overview.scss";

function Favorites() {
  return (
    <>
      <div className="subtitle">
        <h1>Favorites</h1>
      </div>

      <section className="card">
        <>
          <FavoriteCards />
        </>
      </section>
    </>
  );
}

export default Favorites;
