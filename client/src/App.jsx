import { Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import "./App.css";

function App() {
  // const [posts, setPosts] = useState([]);

  // async function fetchPosts() {
  //   const response = await fetch("/api/posts");
  //   const result = await response.json();
  //   setPosts(result);
  // }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Posts />} />
      </Routes>
      {/* <button onClick={fetchPosts}>See Posts</button>
      <p>{JSON.stringify(posts)}</p> */}
    </div>
  );
}

export default App;
