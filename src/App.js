import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Banner/Banner";
import Rowposts from "./rowposts/Rowposts";
import { actions, originals, horror ,documenteries} from "./constants/url";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowposts title="Netflix-Orginals" url={originals} youtube />
      <Rowposts title="Action" isSmall url={actions} />
      <Rowposts title="Horror" isSmall url={horror} />
      <Rowposts title="Documenteries" isSmall url={documenteries} />

      <Footer />
    </div>
  );
}

export default App;
