

export default function AdminButtons(props) {
    return(
        <nav className="AdminButtons" >
        <button onClick={function() {
            props.Add()
        }}>Добавить</button>
        <button>Удалить</button>
        </nav>
    )
}