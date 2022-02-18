import Articles from "./components/Articles";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyle from "./GlobalStyles";

function App() {
  
  return (
    <div className="App">
      <GlobalStyle/>
      <Navbar />
      <Hero/>
      <FeaturesSection />
      <Articles/>
      <Footer />
    </div>
  );
}

export default App;
