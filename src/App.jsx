import "./App.css";
import "./components/TextePrincipal.scss";
import "./components/Mushrooms.scss";
import "./components/Articles.scss";
import "./components/Footer.scss";
// import "./components/TypeEffect.scss";
import Mushrooms from "./components/Mushrooms";
import TextePrincipal from "./components/TextePrincipal";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
// import TypeEffect from "./components/TypeEffect";

function App() {
  return (
    <div className="principalContainer">
      <TextePrincipal />
      {/* <TypeEffect
        text="Passez votre souris sur l'image, quelque chose devrait se produire. Si vous êtes sur téléphone ou tablette, l'expérience n'est malheureusement pas encore disponible."
        speed={500}
      /> */}
      <Mushrooms />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
