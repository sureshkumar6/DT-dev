import YouTube from "react-youtube";
import { useState, useEffect } from "react";

function Tpme(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [props.assets]);

  let getAssetObject = () => {
    for (let i = 0; i < props.assets.length; i++) {
      if (props.assets[i].asset_id === parseInt(props.asset_id)) {
        if (props.asset_id =='18883'){
          console.log("pop")
        }
        return i;
      }
    }
  };
  let assetIndex = getAssetObject();
  let assetTitle = props.assets[assetIndex]?.asset_title;
  let assetDescription = props.assets[assetIndex]?.asset_description;
  console.log(assetIndex);
  return (
    <div>
      <div className="compoTitle">
        {loading ? (
          <p>Loading...</p>
        ) : assetTitle ? (
          <h5>{assetTitle}</h5>
        ) : (
          <p>Error: Asset not found</p>
        )}
      </div>
      <p>{assetDescription}</p>
    </div>
  );
}

export default Tpme;
