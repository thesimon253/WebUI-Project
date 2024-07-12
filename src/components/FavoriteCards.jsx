
import "../scss/Overview.scss";
import Card from "./Cards";
import { useState } from "react";


function FavoriteCards({contacts}) {

  
  
  return (
  
  <>
   
   {contacts.map(contact => <Card name={contact.name} lastname={contact.lastname}  mail={contact.email} key={contact.id}/> )}

  </>
  
);
}

export default FavoriteCards;
