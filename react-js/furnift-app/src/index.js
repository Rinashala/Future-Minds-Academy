import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import HomeHeader from './components/HomeHeader';
import Welcome from './components/Welcome';
import BestFurniture from './components/BestFurniture';
import ViewItems from './components/ViewItems';
import ManyUnique from './components/ManyUnique';
import DetailsCard from './components/DetailsCard';
import Shop from './components/Shop';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer2';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeHeader />
    <div className='container'>
      <main>
        <Welcome />
        <p className="nicorTxt"><b>NICOR</b></p>
        <BestFurniture />
        <ViewItems />
        <ManyUnique />
        <DetailsCard />
        <Shop />
        <NewsLetter />
        <Footer />      </main>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
