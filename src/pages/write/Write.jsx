import { useState } from "react";
import "./write.css";

export default function Write({ setPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  function addPost() {
    setPosts((posts) => {
      const newPosts = [
        ...posts,
        {
          title,
          content,
          dateCreated: new Date().toLocaleDateString(),
        },
      ];
      setTitle("");
      setContent("");
      return newPosts;
    });
  }
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" onClick={addPost}>
          Publish
        </button>
      </div>
    </div>
  );
}
