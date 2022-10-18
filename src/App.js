import React from 'react'
import {Routes, Route} from 'react-router-dom'
//styles
import './index.scss';
import './components/Product/_Product.scss';
//static
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import WoomanColection from './pages/Colections/WoomanColection';
import ManColection from './pages/Colections/ManColection';
import ChildrensColection from './pages/Colections/ChildrensColection';

function App() {
  return (
      <>
        <header>
        <Header />
      </header>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/wooman-collection' element={<WoomanColection />}/>
          <Route path='/Man-collection' element={<ManColection />}/>
          <Route path='/childrens-collection' element={<ChildrensColection />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      
        <footer>
          <Footer />
        </footer>
      </>
  );
}

export default App;
