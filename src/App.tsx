import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Navigation } from './Components/NavLink/navigation';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Grid container xs={12}>
        <Navigation />
      </Grid>
      <Outlet />
    </div>
  );
}

export default App;
