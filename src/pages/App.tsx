import './App.css';
//Importar el router


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


//Import Pages
import Home from './home/index';
import AlbumPage from './album';
import SongsPage from './songs';
import Layout from '../components/Layout';

import MyProvider from '../aplication/provider';

const App = () => {

  return (
    <div className="App">
      <Router>
        <MyProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="artist/:id" element={<AlbumPage />} />
              <Route path="artist/:artistid/album/:albumid" element={<SongsPage />} />
            </Routes>
          </Layout>
        </MyProvider>
      </Router>

    </div>
  );
}

export default App;
