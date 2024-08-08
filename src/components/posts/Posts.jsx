import Post from "../post/Post";
import "./posts.css";

const DUMMY_IMAGE_LINK =
  "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

export default function Posts({ posts, setPosts }) {
  return (
    <div className="posts">
      {posts.map((post, index) => {
        return <Post key={index} img={DUMMY_IMAGE_LINK} post={post} setPosts={setPosts}></Post>;
      })}
    </div>
  );
}
