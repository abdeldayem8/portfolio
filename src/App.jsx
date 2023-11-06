import logo from './logo.svg';
import './App.css';

import { RouterProvider, createHashRouter } from 'react-router-dom';
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Notfound from './Components/Notfound/Notfound'
import Skills from './Components/Skills/Skills'
import Layout from './Components/Layout/Layout';

const router = createHashRouter([
  {path:'/',element: <Layout/> ,children:[ 
  {path:'',element: <About/>},  
  {path:'about',element: <About />},
  {path:'Projects',element: <Projects />},
  {path:'Contact',element: <Contact />},
  {path:'skills',element: <Skills />},
  {path:'*',element: <Notfound />},
]}]);
function App() {
 
    return <>
    <RouterProvider router={router}></RouterProvider>
  </>
  
  
}

export default App;
