
const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className="addItems" onSubmit={handleSubmit}>
        <label>Add Items</label>
        <input
         type="text"
         placeholder="Add Items"
         value={newItem}
         onChange={(e)=>setNewItem(e.target.value)}
          />
    </form>
  )
}

export default AddItem