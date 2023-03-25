import { useState, useEffect } from 'react';
import'./App.scss'
import Tpme from './components/Tpme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faScrewdriverWrench, faBell, faUser, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [title, setTitle] = useState('');
  const [taskTilte, setTaskTitle] = useState('')
  const [task_description, setTask_description] = useState('')

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json'
      );
      const data = await response.json();
      // console.log(data.title);
      // console.log(data.tasks[0].task_title)
      setTitle(data.title);
      setTaskTitle(data.tasks[0].task_title)
      setTask_description(data.tasks[0].task_description)
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
      <div className='text'><h4>{title}</h4>
        <button>Submit Task</button>
      </div>
      <div>
        <div>
          <h5>{taskTilte}</h5>
        </div>
        <div>
          <p>{task_description}</p>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item">
            <Tpme />
          </div>
          <div className="grid-item">
            <Tpme />
          </div>
          <div className="grid-item">
            <Tpme />
          </div>
          <div className="grid-item">
            <Tpme />
          </div>
      </div>
      </header>
    </div>
  );
}

export default App;
