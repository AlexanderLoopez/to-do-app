import './App.css';
import toDoLogo from './images/to-do-logo.png';
import Tarea from './components/Task';

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
        <Tarea text='Learn React'/>
      </div>
    </div>
  );
}

export default App;
