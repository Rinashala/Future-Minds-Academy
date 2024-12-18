import Card from './components/Card/Card';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';



function App() {
  let Navtitle = "Cool Saas";
  let HeaderTitle = "Payment Plans";
  let HeaderDescp = "Choose from one of the following payment plans";


  let CardDetails = [{
    title: 'Basic',
    description: 'The simplest plan',
    price: 10,
    currency: '$',
    features: [
      'Create and Edit posts',
      'Unlimited notifications'
    ]
  }, {
    title: 'Pro',
    description: 'Everything in Basic, plus:',
    price: 30,
    currency: '$',
    features: [
      'Unlimited Requests',
      'Up to 100 accounts'
    ]
  }, {
    title: 'Enterprise',
    description: 'Everything in Pro, plus:',
    price: 95,
    currency: '$',
    features: [
      '24/7 Suppor',
      'Custom solutions'
    ]
  }, {
    title: 'Enterprise',
    description: 'Everything in Pro, plus:',
    price: 95,
    currency: '$',
    features: [
      '24/7 Suppor',
      'Custom solutions'
    ]
  }
  ];
  let footer = "© 2024 Cool SaaS";
  return <>
    <NavBar title={Navtitle}></NavBar>
    <Header title={HeaderTitle} descp={HeaderDescp}></Header>
    <div className='card-container'>{CardDetails.map(c => <Card plan={c}></Card>)
    }</div>
    <Footer footerDescp={footer}></Footer> </>;
}
export default App;
