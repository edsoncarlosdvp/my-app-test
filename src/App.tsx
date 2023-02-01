import { Outlet } from 'react-router-dom';
import './App.css';
import { Navigation } from './Components/NavLink/navigation';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
