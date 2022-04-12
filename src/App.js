import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Layouts/Navbar';
import Router from './route';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Router />
  </BrowserRouter>
);

export default App;
