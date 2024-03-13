import { useState } from "react"


export default function AddImage(props) {
    const [Active,SetActive] = useState(false)

const ShowImages = function(Imgs) {
    if (Active === true) {
        return(
            <div className="ImageList">
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
      {ShowImages(props.Imgs)}
    </div>)
}