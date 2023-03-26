import YouTube from 'react-youtube';

function Tpme(props) {

  let getAssetObject=()=>{
    for(let i=0; i<props.assets.length; i++){
      if (props.assets[i].asset_id===parseInt(props.asset_id)){
        return i
      }
    }
  }
  let assetIndex = getAssetObject()
  console.log(assetIndex)
  return (
    <div>
      <h4>{props.assets[assetIndex].asset_title}</h4>
      <p>{props.assets[assetIndex].asset_description}</p>
    </div>
  );
}

export default Tpme;
