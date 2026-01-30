
const SearchItems = ({search, setSearch}) => {
  return (
    <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>

        <label>Search Items</label>
        <input 
        type="text" 
        placeholder="Search Items"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />

    </form>
  )
}

export default SearchItems