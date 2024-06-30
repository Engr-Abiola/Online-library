import { PiWebhooksLogo } from "react-icons/pi";
import './header.scss';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div id='hd'>

       <div id='logo'>
         <PiWebhooksLogo size={40}/>
       </div>
       
       <div id='connect'>
         <Link to='/signup'>sign up</Link>
         <Link to='/login'>login</Link>
       </div>

    </div>
  )
}

export default Header
