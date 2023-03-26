import { useState, useEffect } from "react";
import "./App.scss";
import Tpme from "./components/Tpme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faScrewdriverWrench,
  faBell,
  faUser,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import JourneyBoard from "./components/JourneyBoard";

function App() {
  const [title, setTitle] = useState("");
  const [taskTilte, setTaskTitle] = useState("");
  const [task_description, setTask_description] = useState("");
  const [assets, setAssets] = useState("");
  const [tasks, setTasks] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json"
      );
      const data = await response.json();
      // console.log(data.title);
      // console.log(data.tasks)
      setTasks(data.tasks);
      setTitle(data.title);
      setTaskTitle(data.tasks[0].task_title);
      setTask_description(data.tasks[0].task_description);
      setAssets(data.tasks[0].assets);
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

          {/* <div className="grid-container">
            {[18883, 18884, 18885, 18886].map((assetId) => (
              <div className="grid-item" key={assetId}>
                <Tpme assets={assets} asset_id={assetId} />
              </div>
            ))}
          </div> */}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
