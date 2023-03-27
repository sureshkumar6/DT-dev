import { useState, useEffect } from "react";
import "./App.scss";
import Tpme from "./components/Tpme.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faScrewdriverWrench,
  faBell,
  faUser,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import JourneyBoard from "./components/JourneyBoard.js";

function App() {
  const [title, setTitle] = useState("");
  const [taskTilte, setTaskTitle] = useState("");
  const [task_description, setTask_description] = useState("");
  const [assets, setAssets] = useState("");
  const [tasks, setTasks] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:6060/api");
      const data = await response.json();
      setTasks(data);
      setTitle(data[0].assets[0].asset_title);
      setTaskTitle(data[0].task_title);
      setTask_description(data[0].task_description);
      setAssets(data[0].assets);
    };

    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header-wrapper">
        <div></div>
        <div className="App-header">
          <img
            src="https://deepthought.education/assets/images/logo/logo.svg"
            alt="logo"
          />
          <div className="header-nav">
            <button>
              <FontAwesomeIcon icon={faHouseChimney} />
            </button>
            <button>
              <FontAwesomeIcon icon={faScrewdriverWrench} />
            </button>
            <button>
              <FontAwesomeIcon icon={faBell} />
            </button>
            <button>
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </div>
        </div>
        <div></div>
      </header>
      <div className="body-content-wrapper">
        <div></div>
        <div className="body-content">

          <div className="title-text">
            <h4>{title}</h4>
            <button>Submit Task</button>
          </div>

          <div className="generic-description-styled">
            <div className="generic-description-styled-title">
              <p>{taskTilte}</p>
            </div>
            <div className="generic-description-styled-desc">
              <p>{task_description}</p>
            </div>
          </div>

          <div className="grid-container">
            {Object.keys(assets).map((assetId) => (
              <div className="grid-item" key={assetId}>
                <Tpme assets={assets} asset_id={assets[assetId].asset_id} />
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;