import './App.css';
import toDoLogo from './images/to-do-logo.png';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="to-do-app">
      <div className='logo-container'>
        <img 
          src={toDoLogo} 
          className='app-logo'
        />
      </div>
      <div className='principal-list'>
        <h1>My Tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
