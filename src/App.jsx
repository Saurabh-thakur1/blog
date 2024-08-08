import { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  const [posts, setPosts] = useState([
    { title: "Hi", content: "Hello world", dateCreated: "Today" },
  ]);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route
          path="/"
          element={<Homepage posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/posts"
          element={<Homepage posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/register"
          element={
            currentUser ? (
              <Homepage posts={posts} setPosts={setPosts} />
            ) : (
              <Register />
            )
          }
        />
        <Route
          path="/login"
          element={
            currentUser ? (
              <Homepage posts={posts} setPosts={setPosts} />
            ) : (
              <Login />
            )
          }
        />
        <Route path="/post/:id" element={<Single />} />
        <Route
          path="/write"
          element={currentUser ? <Write setPosts={setPosts} /> : <Login />}
        />
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;
