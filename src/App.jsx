import "./App.css";
import "./components/TextePrincipal.scss";
import "./components/Mushrooms.scss";
import "./components/Articles.scss";
import Mushrooms from "./components/Mushrooms";
import TextePrincipal from "./components/TextePrincipal";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="principalContainer">
      <TextePrincipal />
      <Mushrooms />
      <Articles />
    </div>
  );
}

export default App;
