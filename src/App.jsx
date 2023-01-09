import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Reasons from "./components/Reasons/Reasons";
import Articles from "./components/Articles/Articles";
import FooterC from "./components/Footer/FooterC";

const App = () => {
  return (
    <div className="font-PublicSans text-lg">
      <NavBar></NavBar>
      <Hero></Hero>
      <Reasons></Reasons>
      <Articles></Articles>
      <FooterC></FooterC>
    </div>
  );
};

export default App;
