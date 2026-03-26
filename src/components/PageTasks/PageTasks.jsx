import { useRef, useState } from 'react'
import AddTasksForm from '../AddTasksForm/AddTasksForm'
import styles from './PageTasks.module.scss'

const PageTasks = (props) => {

    const {
        title,
    } = props

    const [isConstructorOpen, setIsConstructorOpen] = useState(false);

    const constructorRef = useRef(null)

    const handleOutsideClick = (e) => {
        if (isConstructorOpen && constructorRef.current && !constructorRef.current.contains(e.target)) {
            setIsConstructorOpen(false)
        }
    }

    return(
        <div 
        className={styles.screen } 
        onClick={handleOutsideClick} 
        >
        <div className={styles.start}>
            <p className={styles.day}>Сегодня</p>


            {isConstructorOpen && <div ref={constructorRef}> <AddTasksForm /> </div> }

            <button 
            className={styles.button} 
            onClick={() => setIsConstructorOpen(true)}
            >
                <span className={styles.span}>  +  </span> 
                Добавить задачу
            </button>
           
        </div>
    </div>
    )
}

export default PageTasks