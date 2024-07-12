import './App.css';
import {Navbar} from './components/Navbar/navbar';
import Header from './components/Header/header';
import AboutUs from './components/Main/main';
import Services from './components/Main/services'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './components/Footer/footer';
import Contact from './components/Main/contact'
import Modal from 'react-modal';
import Galerij from './components/Main/galerij'
import AOS from 'aos';


function App() {
  return (
    <div className="App">
            <Navbar/>
            <Header/>
            <AboutUs/>
            <Services/>
            <Contact/>
            <Galerij/>
            <Footer/>

    </div>
  );
}

export default App;
