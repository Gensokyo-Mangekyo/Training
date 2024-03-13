import AddGood from "../UI/AddGood";



export default function AddGoodsPanel(props) {

    const Fields = [{Name: "Наименование", Length: 50 },{Name: "Цена", Length: 8 }
    ,{Name: "Вес", Length: 4 },{Name: "Количество", Length: 3 },{Name: "Описание", Length: 255, Type: "textarea" },
    ,{Name: "Изображение", Type: "file" }]

    return(
        <div className="AddGoodsPanel">
            <h1>Добавление товара</h1>
            {Fields.map(x=> <AddGood Name={x.Name} Length={x.Length} Type={x.Type} ></AddGood> )}
            <div className="UnderButtons">
            <button className="ButtonPanel" onClick={function() {
                    {props.Close()}
                    
            }}>Закрыть</button>
             <button className="ButtonPanel" onClick={function() {
                      
            }}>Добавить</button>
            </div>
    </div>
    )
}