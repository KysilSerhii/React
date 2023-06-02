import Baner from "./components/Baner/Baner";
import Header from "./components/Header/Header";
import Blog from "./components/Blog/Blog";
import News from "./components/News";

function App() {
  return (
    <div className="App">
			<Header/>
			<Baner/>
				<div className="content__block">
				<Blog/>
				<News/>
				</div>
    </div>
  );
}

export default App;
