/* import { useState } from 'react' */
import { Link } from "react-router-dom";
import globant from "../assets/globant.png";
import plus from "../assets/plus.png";
/* import Contacts from './Contacts' */
import "../scss/Navbar.scss";
/* import { Link } from 'react-router-dom' */
function NavbarMenu() {
  return (
    <>
      <header>
        <nav>
          <img className="logo" src={globant} alt="logo" />
          <ul>
            <li>
              <Link to="/">Overview</Link>
            </li>
            <li>
              <Link to="/contactsForm">Form</Link>
            </li>
          </ul>

          {/*<ul>
            <li><Link to="/">Overview</Link></li>
            <li><Link to="/Contacts">Contacts</Link></li>
            <li><Link to="/Favorites">Favorites</Link></li>
            <button className="navbutton">
              <img className='plus'  src={plus} alt="" /><a className='newbutton' href="/TicketForm">NEW</a></button>
          </ul>*/}
        </nav>
      </header>
    </>
  );
}

export default NavbarMenu;
