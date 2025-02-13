import "./App.css";
import Producttab from "./Producttab.jsx"
import Hello from "./Hello.jsx"
import Mainbox from "./Mainbox.jsx";
import Button from "./Button.jsx";
import Counter from "./Counter.jsx";

function App() {
  return (
    <>
      <Hello  Name="Nishant Sharma" textColor="#035875" />
      <Producttab/>
      <Mainbox/>
      <Button/>
      <Counter/>
    </>);
}

export default App;
