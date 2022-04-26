import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { animals } from './data.js';

function App() {
  return (
    <div>
      <Header 
        greeting='Welcome to the Alchemy Farm!'
      />
      <Main animals={animals} />
      <Footer email='AlchemyFarmSupport@alchemy.com' />
    </div>
  );
}

export default App;
