import "./App.css";
import Header from "./components/Header/Header";
import AllPosts from "./components/Posts/AllPosts";
import CommunityBar from "./components/UI/CommunityBar";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CommunityBar/>
        <AllPosts />
      </main>
    </div>
  );
}

export default App;
