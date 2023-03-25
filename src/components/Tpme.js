import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

function Tpme() {
  const [assetTitle, setAssetTitle] = useState("");
  const [assetDescription, setAssetDescription] = useState("");
  const [assetContent, setAssetContent] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json"
      );
      const data = await response.json();
      // console.log(data.title);
        setAssetTitle(data.tasks[0].assets[0].asset_title)
        setAssetDescription(data.tasks[0].assets[0].asset_description)
        setAssetContent(data.tasks[0].assets[0].asset_content)
    //   setTitle(data.title);
    };

    getData();
  }, []);
  return (
    <div>
        <div>
            <h5>{assetTitle}</h5>
        </div>
      <div>
        <p>{assetDescription}</p>
      </div>
      <div>
        <YouTube videoId="TiMRwri1xJ8"/>
      </div>
    </div>
  );
}

export default Tpme;
