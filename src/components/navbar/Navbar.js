import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../../assets/logo.jpg'
import  './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={image} alt="" className="img-logo"></img>
        <span className="text-logo"><span className='text-logo-D'>D</span>itagis <span className='text-logo-R'>R</span>ent</span>
      </div>

      <div className="navbar-like">
        <FontAwesomeIcon icon={faHeart}/>
        <span className="text-like">Ưa thích</span>
      </div>
    </div>
  );
};

export default Navbar;
