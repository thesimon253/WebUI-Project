import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";
import Overview from "./components/Overview";
import Form from "./components/Form";

function App() {
  return (
    <>
    
     
     <BrowserRouter>
     <NavbarMenu />
        <Routes>
          <Route element={<Overview></Overview>} path="/"></Route>
          <Route element={<Form></Form>} path="/contactsForm"></Route>
        </Routes>
      </BrowserRouter>

   
    </>
  );
}

export default App;
