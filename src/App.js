
import './App.css';
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar'


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
