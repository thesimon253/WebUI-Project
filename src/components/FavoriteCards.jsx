
import "../scss/Overview.scss";
import Card from "./Cards";

const contacts = [{name: "Simon", email: "mail@com"}, {name: "Simon2", email: "mail2@com"},{name: "Simon3", email: "mail3@com"}]
function FavoriteCards() {


  return (
  
  <>

   {contacts.map(contact => <Card name={contact.name} mail={contact.email}/> )}

  </>
  
);
}

export default FavoriteCards;
