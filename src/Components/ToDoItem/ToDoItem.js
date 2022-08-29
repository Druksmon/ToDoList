import './ToDoItem.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDeleteLeft, faCheck} from '@fortawesome/free-solid-svg-icons'
import {AnimatePresence, motion} from "framer-motion";

const ToDoItem = ({text, id, complete, handleDelete, handleComplete}) => {

    return (
        <>


                <motion.div initial={{opacity: 0}} animate={{opacity: 1}}
                            transition={{type: 'tween', duration: 0.2}}
                            exit={{opacity: 0}}
                            layoutId={{id}}
                            className={complete ? 'to-do-items to-do-items-complete' : 'to-do-items'}>
                    <h4 className={complete ? 'complete' : 'not-complete'}>{text}</h4>
                    <div className='to-do-buttons'>
                        <button onClick={() => handleComplete(id)}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </button>
                        <button onClick={() => handleDelete(id)}>
                            <FontAwesomeIcon icon={faDeleteLeft}/>
                        </button>
                    </div>

                </motion.div>


        </>
    )
}

export default ToDoItem
