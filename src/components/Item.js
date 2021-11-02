export const Item = (props) => {
    // const items = props
    // const {id, name, age} = props 
    // console.log(id)
    const items = props.items
    const theItems = items.map( (item, key) => {
        console.log(items);
        return (
            <div className={key}>
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