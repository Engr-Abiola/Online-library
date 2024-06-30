import Header from '../components/header/Header';
import Menu from '../components/menu/Menu';
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';
 import Content from '../components/content-area/Content'; 


import './layout.css';

const Layout =  ({children}) => {

  return (
    <div id='layout'>
      
      <div id='header'>
        <Header />
      </div>
      
      <div id='nav'>
        <Menu />
      </div>

      <div id='content'>
        {children}
      </div>

      <div id='sidebar'>
        <Sidebar />
      </div>

      <div id='footer'>
        <Footer />
      </div>
    
    </div>
  )
}

export default Layout;
 