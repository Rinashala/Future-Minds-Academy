import './App.css';
import Buttons from './components/Buttons/Buttons';
import Profiles from './components/Profiles/Profiles';

function App() {
  let profiles = {
    profileImg: "logo192.png",
    fullName: "Rina Shala",
    descp: "Rina is a CSE student ",
    birthday: "17 /03 / 2006"
  }
  let addBtn = "Add Profiles";
  let removeBtn = "Remove Profiles"
  return <>  <h1 style={{ textAlign: 'center' }}>Profiles</h1>
    <Profiles profiles={profiles}></Profiles>
    <Buttons addBtn={addBtn} removeBtn={removeBtn}></Buttons>
  </>
}

export default App;
