import { useState, useEffect } from 'react';
import'./App.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faScrewdriverWrench, faBell, faUser, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
function App() {
  const [title, setTitle] = useState('');

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json'
      );
      const data = await response.json();
      // console.log(data.title);
      // console.log(data.tasks[0])
      setTitle(data.title);
    };

    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
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
      <div className='tetx'><p>{title}</p>
        <button>Submit Task</button>
      </div>
      </header>
    </div>
  );
}

export default App;
