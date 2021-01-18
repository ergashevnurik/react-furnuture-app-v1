import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Info from './components/Info';
import Navbar from './components/Navbar';
import { InfoData, InfoDataFive, InfoDataFour, InfoDataThree, InfoDataTwo } from './Data/InfoData';

function App() {
  return (
    <Router>
      <Navbar />
      <Info {...InfoData} />
      <Info {...InfoDataTwo} />
      <Info {...InfoDataThree} />
      <Info {...InfoDataFour} />
      <Info {...InfoDataFive} />
      <Footer />
    </Router>
  );
}

export default App;
