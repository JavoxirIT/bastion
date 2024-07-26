import Activities from './components/Activities';
import ClientsSwiper from './components/ClientsSwiper';
import Contract from './components/Contract';
import Footer from './components/Footer';
import Header from './components/Header';
import PopularProduct from './components/PopularProduct';
import Recomendeyshon from './components/Recomendeyshon';
import Sertificat from './components/Sertificat';
import Widgets from './components/Widgets';
import './style/App.css';

function App() {
  return (
    <>
      <Header />
      <Widgets />
      <Main />
      <Info />
      <Activities />
      <PopularProduct />
      <Recomendeyshon />
      <ClientsSwiper />
      <Contract />
      <Sertificat />
      <Footer />
    </>
  );
}

export default App;
