import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Banner } from "./components/Banner/Banner";
import { About } from "./components/About/About";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <About />
    </div>
  );
}

export default App;
