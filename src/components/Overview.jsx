import Favorites from "./Favorites";
import Contacts from "./Contacts";

import { Link } from "react-router-dom";
function Overview() {
  return (
    <>
      <Link to="/contactsForm"></Link>

      <Favorites />

      <Contacts />
    </>
  );
}

export default Overview;
