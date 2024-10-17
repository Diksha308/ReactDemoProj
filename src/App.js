import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
import Counter from "./Counter/Counter";
import ColorFipper from "./ColorFlipper/ColorFlipper";
import Carousel from "./Carousel/Carousel";
import FAQ from "./FAQ/FAQ";
import AllPagesData from "./AllPages/AllPages"
import CrudApp from "./CRUD/CrudApp";
import Validator from "./PasswordValidator/ValidatedForm"
import ServerCrud from "./serverCRUD/AllCrud"
import { lazy } from "react";
const RollDice = lazy(()=> wait(1000).then(()  => import('./RollDIce/RollDice'))) 

const wait = (time) =>
  {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, time);
    })
  }
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
        <Route path="serverCrud" element={<ServerCrud />}></Route>
        <Route path="RollDiceApp" element={  <Suspense fallback={<h1 >Loading....</h1>}> <RollDice /></Suspense>}></Route>
        
      </Routes>
  
    </BrowserRouter>
  );
}

export default App;
