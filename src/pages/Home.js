import Card from "../components/card/Card"
import Header from "../components/header/Header"
// import {posts} from "../data"
import data from "../data.json";


const Home = () => {
    return (
        <>
            <Header />
            <div className="home">
                {data.map(post=>(
                    <Card key={post.id} post={post}/>
                ))}
            </div>
        </>
    )
}

export default Home
