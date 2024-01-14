import "./App.css";
import "./components/TextePrincipal.scss";
import "./components/Mushrooms.scss";
import "./components/Articles.scss";
import "./components/Footer.scss";
import Mushrooms from "./components/Mushrooms";
import TextePrincipal from "./components/TextePrincipal";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="principalContainer">
      <TextePrincipal />
      <Mushrooms />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
