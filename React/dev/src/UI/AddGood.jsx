import AddImage from "./AddImage"
import Mango from "../images/mango.png"

export default function AddGood(props) {

let TypeData = <input maxLength={props.Length}></input>

if (props.Type === "textarea") 
    TypeData = <textarea maxLength={props.Length}></textarea>
    if (props.Type === "file") 
    TypeData = <AddImage Imgs = {[Mango]} ></AddImage>

return(
    <div className="Field">
        <div className="FieldType">
        <label>{props.Name}</label>
        </div>
        <div className="FieldType">
        {TypeData}
        </div>
    </div>
)
}