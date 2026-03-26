import styles from './AddTask.module.scss'

const AddTask = () => {

    return (
        <div className={styles.addTask}>
             <div className={styles.plus}>+</div>
             <p className={styles.text}>Добавить задачу</p>
        </div>
    )
}

export default AddTask