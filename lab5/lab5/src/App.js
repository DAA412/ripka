import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './pages/Main';
import Description from './pages/Description';
import Auth from './pages/Auth';
import Registration from './pages/Registration';


function App() {

   return (
    <BrowserRouter basename="/" >
      <div>
        <Switch>
          <Route exact path="/">
              <Auth/>
          </Route>
          <Route exact path="/food">
            <Main/>
          </Route>
          <Route exact path="/reg">
            <Registration/>
          </Route>
          <Route path="/food/:fId">
            <Description /> 
          </Route> 
        </Switch>
      </div>
    </BrowserRouter>
);
}

export default App;

