import  './Header.scss';
import background from '../../assets/bg-hero_2x.webp'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [showProvince, setShowProvince] = useState(false);
    const [showArea, setShowArea] = useState(false);
    const [province, setProvince] =useState('');
    const [area, setArea] =useState('');
    const [valueArea, setvalueArea] =useState(0);

    const navigation = useNavigate();
    const handleSearch = () => {
        navigation('/search', {state:{ province, valueArea }});
    };

    const getProvince = (value) => {
        setProvince(value);
        setShowProvince(!showProvince);
    };

    const getArea = (value) => {
        setArea(value);
        setvalueArea(changeArea(value));
        console.log(value);
        setShowArea(!showArea)
    };

    const changeNameProvince = (value) => {
        if (value === 'danang') {
            return 'Đà Nẵng'
        }else if (value === 'hanoi'){
            return 'Hà Nội'
        }else if (value === 'hochiminh'){
            return 'Hồ Chí Minh'
        }
    };

    

    const changeArea = (value) => {
        if (value === '< 30 m2') {
            return 29
        }else if (value === '30-45 m2'){
            return 45
        }else if (value === '45-60 m2'){
            return 60
        }else if (value === '> 60 m2'){
            return 61
        }
    };

    const valueInput = changeNameProvince(province);

  return (
    <div className="header">
        <h1 className='header-title'>Sàn giao dịch bất động sản</h1>
        <div className='header-search'>
            <div className='header-search-province'>
                <span>Tỉnh</span>
                <div className='province'>
                    <input type="text" placeholder='Chọn tỉnh' value={valueInput}/>
                    <FontAwesomeIcon onClick={()=> setShowProvince(!showProvince)} className='icon' icon={faAngleUp}/>
                </div>
                {showProvince &&
                    <div className='choose-province'>
                        <ul>
                            <li onClick={() => getProvince('danang') }>Đà Nẵng</li>
                            <li onClick={() => getProvince('hanoi') }>Hà Nội</li>
                            <li onClick={() => getProvince('hochiminh') }>Hồ Chí Minh</li>
                        </ul>
                    </div>
                }
            </div>
            <div className='header-search-area'>
                <span>Diện tích</span>
                <div className='area'>
                    <input type="text" placeholder='Chọn diện tích' value={area}/>
                    <FontAwesomeIcon onClick={()=> setShowArea(!showArea)} className='icon' icon={faAngleUp}/>
                </div>
                
                {showArea &&
                    <div className='choose-province'>
                        <ul>
                            <li onClick={() => getArea('< 30 m2')}>&#60; 30 m2</li>
                            <li onClick={() => getArea('30-45 m2')}>30-45 m2</li>
                            <li onClick={() => getArea('45-60 m2')}>45-60 m2</li>
                            <li onClick={() => getArea('> 60 m2')}>&#62; 60 m2</li>
                        </ul>
                    </div>
                }
            </div>
            <button className='btn-search' onClick={handleSearch}><FontAwesomeIcon className='icon' icon={faMagnifyingGlass}/>Tìm kiếm</button>
        </div>
        <img src={background} alt=""></img>
    </div>
  );
};

export default Header;
