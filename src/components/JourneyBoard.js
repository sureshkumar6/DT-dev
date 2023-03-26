import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
function JourneyBoard(props) {
  const [sidebar, setSidebar] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [props.tasks]);
  // console.log(props.tasks[0].task_title)
  // console.log(props.tasks[0].assets[1].asset_title)

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="sidebar">
        <div className="menubar">
          <FontAwesomeIcon icon={faCircleArrowRight} onClick={showSidebar} />
        </div>
      </div>
      <div className={sidebar ? "menu active" : "menu"}>
        <ul className="menu-items" onClick={showSidebar}>
          <li className="menu-toggle">
            <FontAwesomeIcon icon={faCircleArrowLeft} />
          </li>
          <div>
            {loading ? (
              <p>Loading....</p>
            ) : props.tasks[0] ? (
              <li className="sidebar-bold">{props.tasks[0].task_title}</li>
            ) : (
              <p>Error: Task not found</p>
            )}
          </div>
          {loading ? (
            <p>Loading....</p>
          ) : props.tasks[0] ? (
            props.tasks[0].assets.map((asset, index) => (
              <div key={index}>
                <li className="sidebar-text">{asset.asset_title}</li>
              </div>
            ))
          ) : (
            <p>Error: Task not found</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default JourneyBoard;
