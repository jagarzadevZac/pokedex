//import logo from './logo.svg';
import './App.css';
import HomePokedex from "./pages/home/Home";
import {BrowserRouter,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  path="/" component={HomePokedex} exact={true} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
