import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'
import About from "./components/About";
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {
  const projects = [
    {
      title: 'Project 1',
      imageUrl: 'project1.jpg',
      githubLink: 'https://github.com/username/project1',
      description: 'This is a brief description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Add more project objects as needed
  ];

  return (
    <>
      <Router>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/projects' element={<Projects/>}/>
          </Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
