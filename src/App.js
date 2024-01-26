import logo from './logo.svg';
import Contact from './Pages/Ev_Login';
import '../src/Styles/overall_css.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route,Router,Routes } from 'react-router-dom';
import { MdHeight } from 'react-icons/md';

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
