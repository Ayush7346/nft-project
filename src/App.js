import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Nft_tile from './component/Nft_tile';
import Tile__homepage from './component/Tile__homepage';
import Upper__homepage from './component/Upper__homepage';
import Footer from './component/Footer';
import LeaderBoard from './component/LeaderBoard';
import Collections_tile from './component/Collections_tile';
import Top_collection from './component/Top_collection';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Collection_homepage from './component/Collection_homepage';
import HelpCenter from './component/HelpCenter';
import Buying from './component/Buying';

function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path='/nft' element={<Tile__homepage />} />
          <Route exact path='/collections' element={<Collection_homepage />} />
          <Route exact path='/HelpCenter' element={<HelpCenter />} />
          <Route exact path='/MarketPlace' element={<Upper__homepage />} />
          <Route exact path='/LeaderBoard' element={< LeaderBoard />} />
          <Route exact path='/Buying' element={< Buying />} />

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
