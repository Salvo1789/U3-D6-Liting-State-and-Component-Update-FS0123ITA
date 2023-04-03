import "bootstrap/dist/css/bootstrap.min.css";
import "./components/MyFooter.css"
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNav brand="EpiBooks" claim="All the books you want!" />
      <Welcome/>
      <AllTheBooks/> 
      <MyFooter/>
    </>
  );
}

export default App;
