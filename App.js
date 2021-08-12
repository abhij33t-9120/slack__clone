import Login from './components/Login';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import { useStateValue } from './StateProvider';

function App() {
  const [{ user },dispatch]=useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ):<>
              {/* header............ */}
      <Header />
      <div className="app_body">
      {/* Sidebar......... */}
      <Sidebar />
      {/* React Router--> Chat Screen............ */}
      <Switch>
        <Route path='/room/:roomId'>
          <Chat />
        </Route>
        <Route path='/'>
          <h1>Welcome</h1>
        </Route>
      </Switch>
    </div>
    </>
        }
    </Router>
    </div>
  );
}

export default App;
