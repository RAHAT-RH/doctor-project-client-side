import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/Pages/About/About';
import Appointment from './component/Pages/Appointment/Appointment';
import Contact from './component/Pages/Contact/Contact';
import Home from './component/Pages/Home/Home';
import Login from './component/Pages/Login/Login';
import Review from './component/Pages/Review/Review';
import SignUp from './component/Pages/SignUp/SignUp';
import Footer from './component/Shared/Footer/Footer';
import Navbar from './component/Shared/Navbar/Navbar';

function App() {
  return (
    <div className='mx-auto max-w-screen-2xl'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/appointment" element={<Appointment></Appointment>} />
        <Route path="/review" element={<Review></Review>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
