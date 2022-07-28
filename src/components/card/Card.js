import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cards.scss";
import { Link  } from "react-router-dom";

const Card = ({post}) => {
  console.log(post);

  return (
    <div className="card">
      <Link className="link" to={`/post/${post.id}`}>
        <div className="card-img">
          <img src={post.avatar} alt="" className="img" />
          <div className="type">{post.type.name}</div>
          <FontAwesomeIcon className="icon" icon={faHeart} />
        </div>
        <div className="card-desc">
          <span className="title">{post.title}</span>
          <p className="desc">{post.address}</p>
          <p className="desc">Giá từ:<span>{post.price.from} - {post.price.to} tỷ</span></p>
        </div>
      </Link>
    </div>
  );
};

export default Card;


// const Card = () => {
//   return (
//     <div className="card">
//       <Link className="link" to={`/post/${post.id}`}>
//         <span className="title">{post.title}</span>
//         <img src={post.img} alt="" className="img" />
//         <p className="desc">{post.desc}</p>
//         <button className="cardButton">Read More</button>
//       </Link>
//     </div>
//   );
// };

// export default Card;
