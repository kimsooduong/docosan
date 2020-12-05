import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ListDoctor from "./containers/ListDoctor/ListDoctor";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <ListDoctor />
      </div>
      <Footer />
    </div>
  );
}

export default App;
