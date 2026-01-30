
const Footer = ({count}) => {

  return (
    <footer className="footer">
        <p> {count} {count !== 1 ? "Items" : "Item"} </p>
    </footer>
  )
}

export default Footer