import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Banner } from "./components/Banner/Banner";
import { About } from "./components/About/About";
import { ContactUs } from './components/ContactUs/ContactUs';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Banner />
      <About />
      <ContactUs />
    </div>
  );
}

export default App;
