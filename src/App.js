import logo from './logo.svg';
import Login from './containers/login';
import Dashboard from './containers/dashboard';
import Header from './components/header'
import Details from './containers/dashboard/details';
import CreateProduct from './containers/createProduct';
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


function App() {
  return (
    
    <Router className="App">
      <Header />
      <Switch>

        <Route path ="/dashboard/:id" component={Details} />
        
        <Route path ="/dashboard" component={Dashboard}></Route>

        <Route path ="/" exact>
          <Login />
        </Route>

        <Route path ="/create" component={CreateProduct} />
        

      </Switch>
      
    </Router>
  );
}

export default App;
