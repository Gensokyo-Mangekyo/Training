import { useEffect, useState } from "react"
import ImageService from "../modules/ImageService"


export default function AddImage(props) {
const [Active,SetActive] = useState(false)
const [Imgs,SetImgs] = useState()

useEffect(()=> {
    SetImgs(props.Imgs)
})

function preventDefaults (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function handleImage(e) {
    e.preventDefault();
    e.stopPropagation();
    let dt = e.dataTransfer;
      let files = dt.files;
      if (files.length === 0) {
        return;
      }
      const file = files[0];
      if (!file.type.startsWith('image/')) {
        return;
      }
      const reader = new FileReader();
      reader.onload = function(e) {
        const ImagesSrv = new ImageService()
        const imageUrl = ImagesSrv.GetImageFromBytes(e.target.result)
        const NewImgs = [...Imgs,imageUrl]
        SetImgs(NewImgs)
      }
      reader.readAsArrayBuffer(file);
  }

const ShowImages = function() {
    if (Active === true) {
        return(
            <div onDragEnter={preventDefaults} onDragOver={preventDefaults} onDragLeave={preventDefaults} onDrop={handleImage} id="ImageList">
{Imgs.map(x=> <img onClick={function() {
    SetActive(false)
}} src={x} alt="Изображение" ></img> )}
</div>
        )
    }
}



    return (
        <div>
    <span className="ButtonPanel" onClick={function() { 
        SetActive(!Active)
        }}>
        
        {Active ? 'Закрыть' : 'Выбрать'}
    </span>
      {ShowImages()}
    </div>)
}