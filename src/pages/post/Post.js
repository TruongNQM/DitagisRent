import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router";
import dataJSon from "../../data.json";
import { useState } from 'react';
import "./Post.scss";

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const post = dataJSon.find((p) => p.id.toString() === path);
  console.log(location);

  console.log(post);

  const [current, setCurrent] = useState(0);
  const slides = post.images;
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="post-container">
      <div className="post-slide">
        <FontAwesomeIcon className='left-arrow' icon={faArrowLeft} onClick={prevSlide} />
        <FontAwesomeIcon className='right-arrow' icon={faArrowRight} onClick={nextSlide} />
        {post.images.map((item, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={process.env.REACT_APP_IMAGE_URL + item} alt='travel' className='image' />
              )}
            </div>
          );
        })}
      </div>
      <div className="post-content">
        <div className="brief-information">
          <div className="info">
            <h1>{post.title}</h1>
            <p>{post.address}</p>
            <p>Diện tích: {post.area}m2</p>
          </div>
          <h1 className="info-price">{post.price.from} - {post.price.to} tỷ</h1>
        </div>

        <div className="specific-information">
          <h2>Thông tin chi tiết</h2>
          <p>{post.description}</p>
        </div>

      </div>
    </div>
  );
};

export default Post;
