import './App.css';
import Header from './Pages/Header/Header';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home/Home'
import NotFound from './Pages/404Page/NotFound';
import Footer from './Pages/Footer/Footer';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
