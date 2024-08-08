import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ img, post, setPosts }) {
  function deletePost() {
    setPosts((posts) => {
      const removedPosts = posts.filter((k) => k != post);
      return removedPosts;
    });
  }
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{post.dateCreated}</span>
      </div>
      <p className="postDesc">{post.content}</p>
      <button onClick={deletePost}>Delete</button>
    </div>
  );
}
