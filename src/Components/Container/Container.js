import './Container.css'
import svg from '../Assets/blobanimation.svg'
// import svg from '../Assets/blobanimation2.svg'
import macButtons from '../Assets/mac-buttons.png'
import ToDoForm from "../ToDoForm/ToDoForm";
import {useState} from "react";
import ToDoItem from "../ToDoItem/ToDoItem";

import {AnimatePresence, motion} from "framer-motion";

const Container = () => {

    const [toDo, setToDo] = useState([]);


    const addToDo = (text) => {

        let id = 1;

        if (toDo.length > 0) {
            id = toDo[0].id + 1
        }

        const newToDo = {
            text: text,
            id: id,
            key: id,
            complete: false,
        }

        setToDo(() => [newToDo, ...toDo])
    }

    const handleDelete = (id) => {
        const newToDo = toDo.filter((el) => el.id !== id)
        setToDo(newToDo, ...toDo)
    }

    const handleComplete = (id) => {

        const upDateToDo = toDo.map((el) => {
            if (el.id === id) {
                el.complete = !el.complete;
            }
            return el
        })
        setToDo(upDateToDo)
    }

    const elements = toDo.map((e) => (
        <ToDoItem text={e.text}
                  id={e.id}
                  key={e.key}
                  handleDelete={handleDelete}
                  handleComplete={handleComplete}
                  complete={e.complete}
        />
    ))

    return (

        <div className="primary-container">
            <img className='svg-form svg-form-1' src={svg} alt=""/>
            <img className='svg-form svg-form-2' src={svg} alt=""/>
            <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}}
                        transition={{type: 'tween', delay: 0.2, duration: 0.2}}
                        className="secondary-container">
                <div className="title-bar">
                    <h3>To Do List</h3>
                    <img src={macButtons} alt=""/>

                </div>
                <div className="form">
                    <ToDoForm addToDo={addToDo}/>

                </div>
                <div className="to-do-items-container">
                    <AnimatePresence>
                        {elements}
                    </AnimatePresence>
                </div>
            </motion.div>
            <div className="credits">
                <a target='_blank' href="https://www.linkedin.com/in/dariovolk/">code by dario-volkmann</a>
            </div>
        </div>

    )
}

export default Container