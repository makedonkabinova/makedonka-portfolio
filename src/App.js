import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
          </Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
