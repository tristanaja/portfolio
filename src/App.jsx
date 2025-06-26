import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="p-6 w-full h-full">
      <Navbar />
      <AboutMe id="about" />
    </div>
  );
}

export default App;
