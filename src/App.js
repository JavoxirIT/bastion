import Activities from './components/Activities';
import ClientsSwiper from './components/ClientsSwiper';
import Contract from './components/Contract';
import Footer from './components/Footer';
import Header from './components/Header';
import PopularProduct from './components/PopularProduct';
import Recomendeyshon from './components/Recomendeyshon';
import Sertificat from './components/Sertificat';
import Widgets from './components/Widgets';
import Main from './components/Main';
import Info from './components/Info';
import { mainCatd } from './state/mainCard';
import './style/App.css';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Widgets />
      </div>
      <Main mainCatd={mainCatd} />
      <div className='container'>
        <Info />
        <Activities />
        <PopularProduct />
        <Recomendeyshon />
        <ClientsSwiper />
        <Contract />
        <Sertificat />
        <Footer />
      </div>
    </>
  );
}

export default App;
