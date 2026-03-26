import { useState } from "react"

const TodoItem = () => {

    const [tasks, setTasks] = useState([])

    const AddTasks = () => {
        setTasks(
            {
                title: '',
                description: '',
                id: '',
            }
        )
    }

    return (
        <li>

        </li>
    )
}

export default TodoItem