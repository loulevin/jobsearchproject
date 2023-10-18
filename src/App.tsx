import { NavBar } from "./Components/NavBar/NavBar";
import { Search } from "./Components/SearchDiv/SearchDiv";
import { Jobs } from "./Components/JobDiv/JobDiv";
import { ValueDiv } from "./Components/ValueDiv/ValueDiv";
import { Footer } from "./Components/FooterDiv/Footer";

const App = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <NavBar />
      <Search />
      <Jobs />
      <ValueDiv />
      <Footer />
    </div>
  );
};

export default App;
