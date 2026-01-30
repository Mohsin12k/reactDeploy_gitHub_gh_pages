import ListItem from "./ListItem";

const Content = ({items, handleCheck, handleDelete}) => {
  return (
    <main className="main">
        {items.length ? (
          <ListItem 
          items={items} handleCheck={handleCheck} handleDelete={handleDelete} 
          />
        )
        : <p style={{marginTop:"10rem", color:"red"}}>Sorry, No items to display.😌</p> 
    }


    </main>
  )
}

export default Content