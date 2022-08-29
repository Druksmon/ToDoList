import './ToDoForm.css'
import {useRef, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAdd} from '@fortawesome/free-solid-svg-icons'

const ToDoForm = ({addToDo}) => {

    const [textToDo, setTextToDo] = useState();

    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
        if (textToDo !== "" && textToDo !== undefined) {
            addToDo(textToDo)

            inputRef.current.value = ""
            setTextToDo(undefined)
        }
    }

    return (

        <form className='form-to-do' onSubmit={handleSubmit}>
            <input ref={inputRef} placeholder='Insert Text' onChange={(e) => setTextToDo(e.target.value)} type=""/>
            <button>
                <FontAwesomeIcon icon={faAdd}/>
            </button>
        </form>

    )
}

export default ToDoForm