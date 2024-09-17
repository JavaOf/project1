import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Programms from './pages/Programms.jsx'
import Trainers from './pages/Trainers.jsx'
import Membership from './pages/Membership.jsx'
import Contact from './pages/Contact.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/programms' element={<Programms/>}/>
      <Route path='/trainers' element={<Trainers/>}/>
      <Route path='/membership' element={<Membership/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
