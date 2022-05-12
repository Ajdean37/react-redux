// learn more about Routing at https://reactrouter.com/docs

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "../../Views/HomeView/HomeView";
import AboutView from '../../Views/AboutView/AboutView';
import CounterView from "../../Views/CounterView/CounterView";
import NoMatchView from "../../Views/NoMatchView/NoMatchView";
import LaunchesView from "../../Views/LaunchesView/LaunchesView";
import Navbar from "../Navbar/Navbar";
import SelectedLaunchView from "../../Views/SelectedLaunchView/SelectedLaunchView";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/about' element={<AboutView />} />
        <Route path='/counter' element={<CounterView />} />
        <Route path='/launches' element={<LaunchesView />} />
        <Route path='/launches/:id' element={<SelectedLaunchView />} />


    

        {/* no match 404 */}
        <Route path="*" element={<NoMatchView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;