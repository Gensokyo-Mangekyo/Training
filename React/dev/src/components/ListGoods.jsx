import React, { useState, useEffect } from "react"
import GoodCard from "../UI/GoodCard"

export default function ListGoods() {
    const [Goods,SetGoods] = useState([
        {
            Url: "",
            Name: "Пюре Люблю жизнь Манго из Мьянмы, банка 430 г, 2 шт",
            Price: 820
         },
         {
            Url: "",
            Name: "Пюре Люблю жизнь Манго из Мьянмы, банка 430 г, 2 шт",
            Price: 820
         },
         {
            Url: "",
            Name: "Пюре Люблю жизнь Манго из Мьянмы, банка 430 г, 2 шт",
            Price: 820
         },
         {
            Url: "",
            Name: "Пюре Люблю жизнь Манго из Мьянмы, банка 430 г, 2 шт",
            Price: 820
         },
         {
            Url: "",
            Name: "Пюре Люблю жизнь Манго из Мьянмы, банка 430 г, 2 шт",
            Price: 820
         },
    ]) 

    return (
        <div className="CardsBox">
                <h1>Товары</h1>
                <div className="CardsFlex">
                        {Goods.map(x=> <GoodCard Good={x} ></GoodCard>)}
                    </div>
                </div>
    )

}