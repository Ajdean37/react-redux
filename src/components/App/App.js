// learn more about Routing at https://reactrouter.com/docs

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "../../Views/HomeView/HomeView";
import AboutView from '../../Views/AboutView/AboutView';
import CounterView from "../../Views/CounterView/CounterView";
import NoMatchView from "../../Views/NoMatchView/NoMatchView";
import Navbar from "../Navbar/Navbar";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='about' element={<AboutView />} />
        <Route path='counter' element={<CounterView />} />


        {/* no match 404 */}
        <Route path="*" element={<NoMatchView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;