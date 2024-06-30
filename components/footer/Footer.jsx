import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare, FaPhone } from "react-icons/fa";
import { MdWhatsapp,MdEmail,MdLocationPin,MdAccessTime } from "react-icons/md";
import { TbBrandDaysCounter } from "react-icons/tb";
import './footer.scss';

const Footer = () => {
  return (
    
    <div id='footer'>
      
      <div className='foot' id='l'>
        <div>
          <h3>We are goal getter .</h3>
          <h3>We are creative oriented .</h3>
          <h3>We bring your business ideas into technology .</h3>
          <h3>No limitation,you think it,we build it .</h3>
        </div> 
      </div>

      <div className='foot' id='c'>
         <div>
          <h3><MdLocationPin /> 192 Awolowo road, ikoyi lagos.</h3>
          <h3> <MdAccessTime/> 8am to 5pm</h3>
          <h3><FaPhone /> 01223986</h3>
          <h3><TbBrandDaysCounter/> mon - friday</h3>
          <h3> <MdEmail /> code@gmail.com</h3>
        </div>
      </div>

      <div className='foot' id='r'>  
         <div> <BsTwitterX size={30} /> </div>
         <div> <FaFacebookSquare size={40} /> </div>
         <div> <MdWhatsapp size={50} /> </div>
      </div>

    </div>
  
  )
}

export default Footer
