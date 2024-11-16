import "./App.css";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/Nav";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
