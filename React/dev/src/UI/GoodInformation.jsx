import Mango from "../images/mango.png"

export default function GoodInformation(props) {
    return(
    <div className="container">
    <div className="image-container">
<           img src={Mango} alt="Продукт"/>
   </div>
<div className="info-container">
<h1>{props.Good.Name}</h1>
<p className="price">Цена: {props.Good.Price}₽</p>
<p className="InfoText">
Тип: {props.Good.Type}
</p>
<p className="InfoText">
Количество: {props.Good.Count}шт
</p>
<p className="InfoText">
Вес: {props.Good.Weight}г
</p>
<p className="InfoText">
Описание: {props.Good.Description}
</p>
</div>
</div>)
}