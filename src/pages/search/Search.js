import { useLocation } from "react-router";
import dataJSon from "../../data.json";
// import { useState } from 'react';
import Header from "../../components/header/Header";
import "./Search.scss";

const Search = () => {
  const location = useLocation();
  var newData = [];
  if (!location.state.valueArea) {
    newData = dataJSon.filter(item => item.city ===location.state.province)
  };

  if (location.state.valueArea < 30) {
    newData = dataJSon.filter(item => item.city ===location.state.province && item.area < 30 )
  };
  if (location.state.valueArea >= 30 && location.state.valueArea <= 45){
    newData = dataJSon.filter(item => item.city ===location.state.province && item.area <= 45 && item.area >= 30)
  };
  if (location.state.valueArea <= 60 && location.state.valueArea > 45){
    newData = dataJSon.filter(item => item.city ===location.state.province && item.area <= 60 && item.area > 45)
  };
  if (location.state.valueArea > 60 ){
    newData = dataJSon.filter(item => item.city ===location.state.province && item.area > 60 )
  };
  console.log("newDAta",newData);
  console.log("location",location);

  const changeProvince = (value) => {
    if (value === 'danang') {
      return 'Đà Nẵng'
  }else if (value === 'hanoi'){
      return 'Hà Nội'
  }else if (value === 'hochiminh'){
      return 'Hồ Chí Minh'
  }
  };

  const province = changeProvince(location.state.province)

  return (
    <>
      <Header />
        <div className="searchContainer">
            <div className="searchWrapper">
                <div className="searchSearch">
                    <h1 className="searchTitle">Search</h1>
                    <div className="searchItem">
                        <label>Province</label>
                        <input placeholder={province} className="inputText" type="text" />
                    </div>
                   
                </div>
                <div className="searchResult">
                  {
                    newData.map(item => (
                      <div className='searchItem' key={item.id}>
                        <img src={item.avatar} alt='' className='searchItemImg'/>
                        <div className='searchItemDesc'>
                            <h1 className='searchItemTitle'>{item.title}</h1>
                            <span className='searchItemDistance'>{item.address}</span>
                            <span className='searchItemDistance'>{item.area}</span>
                            <span className='searchItemSubtitle'>{item.description}</span>
                            <span className='searchItemCancelOp'>Giá từ: {item.price.from} - {item.price.to} tỷ</span>
                        </div>
                      </div>
                    ))
                  }
                  
                </div>
            </div>
        </div>
    </>
  );
};

export default Search;
