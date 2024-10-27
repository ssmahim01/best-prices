import LineChart from './components/LineChart/LineChart';
import './App.css'
// import DaisyNav from './components/DaisyNav/DaisyNav';
import Navbar from './components/Navbar/Navbar';
import PriceOptions from './components/PriceOptions/PriceOptions';

function App() {

  return (
    <>
      {/* <h1 className='text-2xl font-bold text-center py-4 text-rose-300'>Vite + React</h1>
      <DaisyNav></DaisyNav> */}

      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App;