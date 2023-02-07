import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Components/NavLink/navigation';
import './styles/App.css';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Grid container xs={12}>
        <Navigation />
        <Outlet />
      </Grid>
    </div>
  );
}

export default App;
