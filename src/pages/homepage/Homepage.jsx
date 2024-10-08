// import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";

export default function Homepage({ posts, setPosts }) {
  // const location = useLocation();
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} setPosts={setPosts} />
        <Sidebar />
      </div>
    </>
  );
}
