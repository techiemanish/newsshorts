import './App.css';
import IndApi from './components/IndApi';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import UsApi from './components/USApi';
import {
  Routes,
  Route
} from "react-router-dom";
import ChinaApi from './components/ChinaApi';
import RussiaApi from './components/RussiaApi';
import AustraliaApi from './components/AustraliaApi';
import SearchNews from './components/SearchNews';

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<SearchNews/>}/>
        <Route exact path="/newsshorts" element={<SearchNews/>}/>
        <Route exact path="/india" element={<IndApi/>}/>
        <Route exact path="/usa" element={<UsApi/>}/>
        <Route exact path="/china" element={<ChinaApi/>}/>
        <Route exact path="/russia" element={<RussiaApi/>}/>
        <Route exact path="/australia" element={<AustraliaApi/>}/>
        <Route exact path="/search" element={<SearchNews/>}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
