//import logo from './logo.svg';
/* import Layout from './layout/Layout'; */
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import {Register} from './Register';
import Login from './Login';
import {Home} from './pages/Home'; 
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogDetail from "./pages/BlogDetail";

import Layout from './layout/Layout';

function App() {
  return (
   
 <div>
       <Routes>
         <Route element={<Layout />}/>  

         <Route path='/' element={ <Home />} /> 
         <Route path='/about' element={ <About />} />
         <Route path='/contact' element={ <Contact />} />
         <Route path='/gallery' element={ <Gallery />} />
         <Route path='/blog' element={ <Blog />} /> 

         <Route path='/login' element={ <Login />} /> 
         <Route path='/register' element={ <Register />} /> 

         <Route path='/blog/:id' element={<BlogDetail/>} />
      </Routes> 
      
 </div>
  )
}

export default App;
