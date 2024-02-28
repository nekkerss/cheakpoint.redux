import { useSelector } from 'react-redux';
import './App.css';
import Addtask from './componet/Addtask';
import Tasklist from './componet/Tasklist';

function App() {
  // const [task,settask]=useState(
  //   [{id :Math.random(),mytask: "gym" , done :true},
  //   {id :Math.random(),mytask: "working" , done :false}]
  const tasks= useSelector(state => state.taskreducer.tasks)
  console.log(tasks);
  return (
    <div className="App">
      <h1> this is my to do list </h1>
      <Addtask/>
      <Tasklist tasks={tasks}/>
    </div>
  );
}

export default App;
