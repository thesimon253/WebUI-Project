import FavoriteCards from "./FavoriteCards";
import "../scss/Overview.scss";

function Favorites({contacts}) {
  return (
    <>
      <div className="subtitle">
        <h1>Favorites</h1>
      </div>

      <section className="card">
        <>
          <FavoriteCards contacts ={contacts} />
        </>
      </section>
    </>
  );
}

export default Favorites;
