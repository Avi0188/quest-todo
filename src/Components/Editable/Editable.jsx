import React from 'react'
import "./Editable.css"
import { X } from 'react-feather'
const Editable = (props) => {
  return (
    <div className='editable'> 
      <p>{props.text ?? "Add item"}</p>
      <form className='editable_edit'>
   <input type="text" placeholder={props.placeholder}/>
   <div className='editable_edit_footer'>
    <button type='submit'>{props.buttonText || "Add"}</button>
    <X />
   </div>

      </form>
    </div>
  )
}

export default Editable
