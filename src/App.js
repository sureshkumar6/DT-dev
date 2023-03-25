import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faScrewdriverWrench, faBell, faUser, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
function App() {
   fetch('https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          test
          <img
            src="https://deepthought.education/assets/images/logo/logo.svg"
            alt="logo"
          />
          <button><FontAwesomeIcon icon={faHouseChimney} /></button>
          <button><FontAwesomeIcon icon={faScrewdriverWrench} /></button>
          <button><FontAwesomeIcon icon={faBell} /></button>
          <button><FontAwesomeIcon icon={faUser} /></button>
          <button><FontAwesomeIcon icon={faEllipsisVertical} /></button>
        </div>
      </header>
    </div>
  );
}

export default App;
