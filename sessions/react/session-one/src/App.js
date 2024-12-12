import './App.css';
import Button from './components/Buttons/Button.js';
import Card from './components/UserCard/Card';

function App() {
  let user = {
    fullName: "Rina Shala",
    occupation: "Student"
  }
  let BtnText = "rina";
  let BtnColor = "pink"
  return <>
    <h1>these are the users    </h1>
    <Card user={user}></Card>
    <Button text={BtnText} color={BtnColor}></Button>

  </>
    ;
}

export default App;
