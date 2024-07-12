import photo from "../assets/profile.png";
import "../scss/Overview.scss";
import by from "../assets/by.png";

function Card ({name, lastname, mail}){

    return (
        <>
          <div className="cardProfile">
            <div className="cardName">
              <img className="fphoto" src={photo} alt="" />
              <h2 className="nameCard">{name}</h2>
              <h2 className="nameCard">{lastname}</h2>
              <p className="mailCard"> {mail} </p>
              <hr />
              <button className="remove_btn">
                <img className="by" src={by} alt="" />
                <a href="#">REMOVE</a>
              </button>
            </div>
          </div>
        </>
      );


}

export default Card