
/* import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi"; */
//import Navigations from '../../nav/Navigations' 
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './menu.scss';

const Menu = () => {
const [openMenu, setOpenMenu] = useState(false);

  const handleMenu=()=>{
  setOpenMenu(!openMenu);
  console.log('button clicked');
 }
  return (
    <nav>
        
          <ul className={openMenu ? 'open' : ''}>
             <li><NavLink  to='/'>home</NavLink></li>
             <li><NavLink  to='/about'>about</NavLink></li>
             <li><NavLink  to='/contact' >contact</NavLink></li>
             <li><NavLink  to='/gallery' >gallery</NavLink></li>
             <li><NavLink  to='/blog'>blog</NavLink></li>
          </ul>

          <div id="hamburger" onClick={handleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        
    </nav> 
  )
}

export default Menu;
