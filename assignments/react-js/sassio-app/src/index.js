import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './componenets/Header';
import DownloadApp from './componenets/DownloadApp';
import TrustedBy from './componenets/TrustedBy';
import Secure from './componenets/Secure';
import Benefit from './componenets/Benefit';
import TrendingImg from './componenets/TrendingImg';
import PathToSuccess from './componenets/PathToSuccess';
import PowerfulSection from './componenets/PowerfulSection';
import CustomerSection from './componenets/CustomerSection';
import Arrow from './componenets/Arrow';
import Statistics from './componenets/Statistics';
import Explore from './componenets/Explore';
import Plans from './componenets/Plans';
import Questions from './componenets/Questions';
import DownloadAppEnd from './componenets/DownloadAppEnd';
import Footer from './componenets/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container-fixed'>
      <Header />
      <DownloadApp />
      <TrustedBy />
      <button className="btn-primary speciale-1">SAFETY FIRST</button>
      <h1 className="text-center">You're in a secure company</h1>
      <Secure />
      <div className="benefit-section">
        <Benefit />
      </div>
      <div class="row path-succes-section">
        <TrendingImg />
        <PathToSuccess />
      </div>
      <PowerfulSection />
      <CustomerSection />
      <Arrow />
      <Statistics />
      <Explore />
      <Plans />
      <Questions />
      <DownloadAppEnd />
      <Footer />
      <div class="scroll-to-top">
        <a href="index.html#top"><span class="material-symbols-outlined arrow-upward">arrow_upward</span></a>
      </div>
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
