import { useState, useEffect } from "react";
import './Tpme.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

function Tpme(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [props.assets]);

  return (
    <div className="comp-wrapper">
      <div className="comp-header">
        <p>{props.assets.asset_title}</p>
        <div className="info-icon">
          <FontAwesomeIcon icon={faCircleInfo} />
        </div>
      </div>
      <div className="comp-body">
        <div className="comp-desc">
          <p><span className="comp-desc-label">Description:</span> {props.assets.asset_description}</p>
        </div>
        <hr className="comp-body-divider" />
      </div>
    </div>
  );
}

export default Tpme;
