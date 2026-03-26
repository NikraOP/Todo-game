import styles from './AddTasksForm.module.scss'

const AddTasksForm = (props) => {

    const {
        constructorRef
    } = props

    
    return (
        <div className={styles.mainBlock} ref={constructorRef}>
            <div className={styles.infoBlock}>
                <input 
                className={styles.Field} 
                type="text"
                placeholder='Название задачи'
                />
                <input 
                className={`${styles.Field} ${styles.FieldDescription}`} 
                type="text"
                placeholder='описание' 
                />

                <div className={styles.filter}>

                </div>
            </div>
        </div>
    )
}

export default AddTasksForm