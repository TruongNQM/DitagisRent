const Card = ({post}) => {
  console.log(post);

  return (
    <div className="card">
      {/* <Link className="link" to={`/post/${post.id}`}> */}
        <span className="title">{post.title}</span>
        <img src={post.avatar} alt="" className="img" />
        <p className="desc">{post.desc}</p>
        <button className="cardButton">Read More</button>
      {/* </Link> */}
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
