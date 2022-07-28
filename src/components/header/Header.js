import  './Header.scss';
import background from '../../assets/bg-hero_2x.webp'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [showProvince, setShowProvince] = useState(false);
    const [showArea, setShowArea] = useState(false);


  return (
    <div className="header">
        <h1 className='header-title'>Sàn giao dịch bất động sản</h1>
        <div className='header-search'>
            <div className='header-search-province'>
                <span>Tỉnh</span>
                <div className='province'>
                    <input type="text" placeholder='Chọn tỉnh'/>
                    <FontAwesomeIcon onClick={()=> setShowProvince(!showProvince)} className='icon' icon={faAngleUp}/>
                </div>
                {showProvince &&
                    <div className='choose-province'>
                        <ul>
                            <li>Đà Nẵng</li>
                            <li>Hà Nội</li>
                            <li>Hồ Chí Minh</li>
                        </ul>
                    </div>
                }
            </div>
            <div className='header-search-area'>
                <span>Diện tích</span>
                <div className='area'>
                    <input type="text" placeholder='Chọn diện tích'/>
                    <FontAwesomeIcon onClick={()=> setShowArea(!showArea)} className='icon' icon={faAngleUp}/>
                </div>
                
                {showArea &&
                    <div className='choose-province'>
                        <ul>
                            <li>&#60; 30 m2</li>
                            <li>30-40 m2</li>
                            <li>45-60 m2</li>
                            <li>&#62; 60 m2</li>
                        </ul>
                    </div>
                }
            </div>
            <button className='btn-search'><FontAwesomeIcon className='icon' icon={faMagnifyingGlass}/>Tìm kiếm</button>
        </div>
        <img src={background} alt=""></img>
    </div>
  );
};

export default Header;
