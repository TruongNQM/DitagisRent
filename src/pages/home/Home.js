import { useState } from 'react';
import Card from "../../components/card/Card"
import Header from "../../components/header/Header"
import dataJSon from "../../data.json";
import "./Home.scss";

const Home = () => {
    const getData = (value)=>{
        if(value === 'all') {
            setData(dataJSon)
            return;
        }
        var newData = [];
        newData = dataJSon.filter(item => item.type.value === value);
        setData(newData);
    };

    const [data, setData] = useState(dataJSon);
    return (
        <>
            <Header />
            <div className="home-container">
                <h1>SẢN PHẨM</h1>
                <div className="item-list">
                    <div className="item" onClick={ () => getData('all')}>Tất cả</div>    
                    <div className="item" onClick={ () => getData('chungcu')}>Chung cư</div>
                    <div className="item" onClick={ () => getData('bietthu')} >Biệt thự</div>
                    <div className="item" onClick={ () => getData('shophouse')}>Shophouse</div>
                    <div className="item" onClick={ () => getData('condotel')}>Condotel</div>
                </div>
                <div className="home">
                    {data.map(post=>(
                        <Card key={post.id} post={post}/>
                        ))}
                </div>
                
            </div>
        </>
    )
}

export default Home
