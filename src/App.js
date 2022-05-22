import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/HomePage/Home/Home";

function App() {
  return (
    <div>
      <Navbar>
        <Home />
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
