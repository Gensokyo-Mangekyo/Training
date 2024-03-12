import ListGoods from "../components/ListGoods"
import Nav from "../components/Nav"
import "../styles/Goods.css"

export default function Goods() {

    return (
        <div>
             <Nav></Nav>
             <h1 id="Header">Админ панель</h1>
            <ListGoods></ListGoods>
        </div>
    )
}