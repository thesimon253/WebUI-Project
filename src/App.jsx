import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";
import Overview from "./components/Overview";
import Form from "./components/Form";
import {useState} from 'react';

function App() {

  const [contacts, setContacts] = useState([{name: "Simon", id: crypto.randomUUID(), lastname:"Peralta", email: "mail@com"}, {name: "Simon2",  id:crypto.randomUUID(), lastname:"Peralta2" ,email: "mail2@com"},{name: "Simon3", id: crypto.randomUUID(), email: "mail3@com"}]);
  
  const contactsHandler = (event) => {
    event.preventDefault();

    const newCard = {
     "name": event.target[0].value,
     "lastname": event.target[1].value,
     "email":event.target[2].value,
     "id": crypto.randomUUID()
    }
  
    setContacts((contacts) => [...contacts, newCard])
  
  }



  return (
    <>
    
     
     <BrowserRouter>
     <NavbarMenu />
        <Routes>
          <Route element={<Overview contacts={contacts}></Overview>} path="/"></Route>
          <Route element={<Form contactsHandler={contactsHandler}></Form>} path="/contactsForm"></Route>
        </Routes>
      </BrowserRouter>

   
    </>
  );
}

export default App;
