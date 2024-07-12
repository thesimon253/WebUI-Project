import Favorites from "./Favorites";
import Contacts from "./Contacts";

import { Link } from "react-router-dom";
function Overview({contacts}) {
  return (
    <>
      <Link to="/contactsForm"></Link>

      <Favorites contacts={contacts}/>

      <Contacts />
    </>
  );
}

export default Overview;
