import Mango from "../images/mango.png"
import { Link } from "react-router-dom"

export default function GoodCard(props) {
    return(
      <Link to={"/Good/0"}>
        <div className= "card">
          <img src={Mango} alt="Продукт"/>
          <p className = "NameCard">{props.Good.Name}</p>
          <p className = "Price">{props.Good.Price}₽</p>
        </div>
        </Link>
    )
}