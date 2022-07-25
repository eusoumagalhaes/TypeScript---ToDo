import { useState } from 'react';

//Styles
import './App.css';
import styles from'./App.module.css';

//Components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import TaskForm from './Components/Form/TaskForm';
import TaskList from './Components/Form/TaskList';

//Interfaces
import { ITask } from './Interfaces/Task';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

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
        <TaskList taskList={taskList} />
      </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
