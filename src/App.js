import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'
import Reviews from './components/Reviews/Reviews';
import Chart from './components/Chart/Chart';
import Blogs from './components/Blogs/Blogs'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/dashboard" element={<Chart />} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/about" element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
