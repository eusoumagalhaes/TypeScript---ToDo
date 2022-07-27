import React, {useState, useEffect, ChangeEvent, FormEvent } from 'react';

//Styles 
import styles from './TaskForm.module.css'

//Interfaces
import { ITask } from '../../../Interfaces/Task';

interface Props {
  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
  task?: ITask | null
  handleUpdate?(id: number, title: string, description: string): void
}

const TaskForm = ({btnText, taskList, setTaskList, task, handleUpdate}: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  useEffect(() => {
    if(task) {
      setId(task.id)
      setTitle(task.title)
      setDescription(task.description)
    }
  }, [task])
  

  const addTaskHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if(handleUpdate) {
      handleUpdate(id, title, description)
    }
    else {
    const id = Math.floor(Math.random() * 1000)

    const newTask: ITask = { id, title, description }

    setTaskList!([...taskList, newTask])

    setTitle('')
    setDescription('') }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === 'title') {
      setTitle(event.target.value)
    } else {
      setDescription(event.target.value)
    }
  }

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor='title'>Title</label>
        <input 
          type='text' 
          name='title'
          placeholder='Title' 
          onChange={handleChange}
          value={title}
        />
     </div>
     <div className={styles.input_container}>
        <label htmlFor='description'>Description</label>
        <input 
          type='text' 
          name='Description'
          placeholder='Task Description'
          onChange={handleChange}
          value={description}
        />
     </div>
     <input type='submit' value={btnText}/>
    </form>
  )
}

export default TaskForm