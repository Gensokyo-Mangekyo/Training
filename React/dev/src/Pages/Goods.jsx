import AdminButtons from "../UI/AdminButtons"
import AddGoodsPanel from "../components/AddGoodsPanel"
import ListGoods from "../components/ListGoods"
import Nav from "../components/Nav"
import "../styles/Goods.css"
import "../styles/AdminPanel.css"
import { useState } from "react"

export default function Goods() {

    const [AddGoodPanel,SetAddGoodPanel] = useState(false)


    return (
        <div>
             <Nav></Nav>
             <h1 id="Header">Админ панель</h1>
             {AddGoodPanel ? <AddGoodsPanel Close = {function() {SetAddGoodPanel(false) }} /> : <AdminButtons Add= {function() {
                SetAddGoodPanel(true)
             }} ></AdminButtons>}
            <ListGoods></ListGoods>
        </div>
    )
}