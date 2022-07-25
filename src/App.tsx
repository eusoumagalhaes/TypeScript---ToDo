import { useState } from 'react';

//Styles
import './App.css';
import styles from'./App.module.css';

//Components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import TaskForm from './Components/Form/TaskForm/TaskForm';
import TaskList from './Components/Form/TaskList/TaskList';

//Interfaces
import { ITask } from './Interfaces/Task';

function App() {
  
  const [taskList, setTaskList] = useState<ITask[]>([]);
  
  //Delete task from taskList
  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => { return task.id !== id}))
  }

  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
      <div>
        <h1>What are you doing today ?</h1><br/>
        <TaskForm 
          btnText='Create Task' 
          taskList={taskList} 
          setTaskList={setTaskList} 
        />
      </div>
      <div>
        <h2>To Do:</h2><br/>
        <TaskList taskList={taskList} handleDelete={deleteTask}/>
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
