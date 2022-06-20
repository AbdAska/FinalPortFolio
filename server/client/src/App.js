import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SharedLayout from './components/Shared/SharedLayout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Dump from './components/dump/Dump'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Dump' element={<Dump />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
