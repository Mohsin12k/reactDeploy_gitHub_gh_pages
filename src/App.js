import Header from "./Header";
import SearchItems from "./SearchItems";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('ShoppingMall')) || []);
  const [search, setSearch] = useState('');
  const [newItem, setNewItem] = useState('');

  useEffect(()=>{
    localStorage.setItem('ShoppingMall', JSON.stringify(items));
  }, [items]);

  const handleCheck = (id) => {
    const listItem = items.map(item => item.id === id ? {...item, checked: !item.checked}:item);
    setItems(listItem);
  }

  const handleDelete = (id) => {
    const listItem = items.filter(item => item.id !== id);
    setItems(listItem);
  }

  const addItem =(newItem)=>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked:false, item:newItem};
    const myNewList = [...items, myNewItem];
    setItems(myNewList);
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
  }


  return (
    <div className="App">
      <Header title = "Grocery List" />
      <SearchItems
        search={search}
        setSearch={setSearch}
      />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content 
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer count={items.length}/>
    </div>
  );
}

export default App;
