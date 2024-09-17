import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Counter/Counter";
import ColorFipper from "./ColorFlipper/ColorFlipper";
import Carousel from "./Carousel/Carousel";
import FAQ from "./FAQ/FAQ";
import AllPagesData from "./AllPages/AllPages"
import CrudApp from "./CRUD/CrudApp";
import Validator from "./PasswordValidator/ValidatedForm"
import RollDice from "./RollDIce/RollDice";
function App() {
  
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPagesData />}></Route>
        <Route path="Carousel" element={<Carousel/>}></Route>
        <Route path="FAQ" element={<FAQ />}></Route>
        <Route path="ColorFipper" element={<ColorFipper />}></Route>
        <Route path="Counter" element={<Counter />}></Route>
        <Route path="CrudApp" element={<CrudApp />}></Route>
        <Route path="ValidatorApp" element={<Validator />}></Route>
        <Route path="RollDiceApp" element={<RollDice />}></Route>
      </Routes>
  
    </BrowserRouter>
  );
}

export default App;
