export const Item = (props) => {
    // const items = props
    // const {id, name, age} = props 
    // console.log(id)
    const items = props.items
    const theItems = items.map( (item) => {
        console.log(items);
        return (
            <div key={item.id}>
                <p>
                    {item.num},{item.subject},{item.level}
                </p>
            </div>
        )
    })
    return (
        <div>
            <p>
            Items
            </p>
            {/* {id}
            {name}
            {age} */}
            {theItems} 
        </div>
        
    )
}