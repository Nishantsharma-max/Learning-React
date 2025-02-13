import "./App.css";
import Producttab from "./Producttab.jsx"
import Hello from "./Hello.jsx"
import Mainbox from "./Mainbox.jsx";
import Button from "./Button.jsx";

function App() {
  return (
    <>
      <Hello  Name="Nishant Sharma" textColor="#035875" />
      <Producttab/>
      <Mainbox/>
      <Button/>
    </>);
}

export default App;
