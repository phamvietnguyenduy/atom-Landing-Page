import Navbar from './components/Navbar';
import Herosaction from './components/Herosaction'
import react, {useState,useEfect} from "react"
import Product from './components/Product';
import DevAPI from './components/DevAPI';
import Customer from './components/Customer';
import Contact from './components/Contact';
function App() {
  const [checkmenu, setcheckmenu] = useState(false);
  return (
    <div>
      <Navbar checkmenu={checkmenu} setcheckmenu={setcheckmenu} />
      <Herosaction checkmenu={checkmenu} />
      <Product/>
      <DevAPI/>
      <Customer/>
      <Contact />
      <div className='text-center mb-12 py-12'>Copy Right @Reactjs 2022</div>
    </div>
  );
}

export default App;
