import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Saurabh">
                Saurabh Kumar Yaduvanshi
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
          Welcome to my corner of the internet! 
        This is where I'll be sharing my thoughts, ideas, and updates on a variety of topics. 
        From the latest trends in technology to personal reflections on my journey in the world of software development,
         you'll find a little bit of everything here.
         As an electrical engineering student with a keen interest in software development, 
         I'll be diving into the latest technologies, programming tips, and best practices. 
         Whether you're a fellow developer or just curious about how technology shapes our world, there's something here for you.
          
        </p>
      </div>
    </div>
  );
}
