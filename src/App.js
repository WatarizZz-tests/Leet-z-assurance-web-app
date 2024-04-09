import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from "../src/pages/contact/Cotact";
import Acceuil from "../src/pages/acceuil/Acceuil";
import Accident from "../src/pages/formulairecrash/Accident";
import Apropos from '../src/pages/apropos/Apropos';
import Demande from './pages/demande/Demande';
import ScrollToTop from './components/scroll/ScrollToTop';
import InactivityTimeout from '../src/components/InactivityTimeout/InactivityTimeout';


function App() {
  
  return (
   
    <BrowserRouter>
    <InactivityTimeout>
    <ScrollToTop/>
     <Routes>
     <Route path="/" element={<Acceuil/>} />
     <Route path="/contact" element={<Contact/>} />
     <Route path="/formulaireaccident" element={<Accident/>} />
     <Route path="/apropos" element={<Apropos/>} />
     <Route path="/mesdemandes" element={<Demande/>} />
     </Routes>
     </InactivityTimeout>
    </BrowserRouter>
   
  );
}

export default App;
