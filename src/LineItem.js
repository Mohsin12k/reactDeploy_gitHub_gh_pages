import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
     <li className="item">
        <input
            type="checkbox"
            checked={item.checked}
            onChange={()=>handleCheck(item.id)}
            />
            <label 
            onDoubleClick={()=>handleCheck(item.id)} 
            style={(item.checked) ? {textDecoration:"line-through", color:"red"}:null}
            
        >{item.item}</label>

            <FaTrashAlt
                role="button"
                tabIndex="0"
                aria-label={`delete ${item.item}`}
                onClick={()=>handleDelete(item.id)}
            />
      </li>
  )
}

export default LineItem