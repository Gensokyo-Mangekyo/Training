import Nav from "../components/Nav"
import "../styles/Goods.css"
import GoodInformation from "../UI/GoodInformation"
import { useParams } from "react-router-dom"



export default function GoodInfo() {

    const  { id } = useParams() //Если указали в url id то в объекте тоже должен быть id

    const ListGoodsInforamtion = [
        {
            Name: "Пюре Люблю жизнь Манго из Мьянмы",
            Price: 820,
            Type: "Фрукт",
            Count: 2,
            Weight: 430,
            Description: "Съедобная банка"
        },
        {
            Name: "Не пюре Люблю жизнь Манго из Мьянмы",
            Price: 820,
            Type: "Фрукт",
            Count: 2,
            Weight: 430,
            Description: "Несъедобная банка"
        }
    ]

    return (
        <div>
             <Nav></Nav>
            <GoodInformation Good={ListGoodsInforamtion[id]} ></GoodInformation>
           
        </div>

    )
}