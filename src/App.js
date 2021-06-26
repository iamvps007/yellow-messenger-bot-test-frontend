import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Bot from "./Pages/Bot";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        
        <Route path="/about">
           <div>Under development</div>
        </Route>
 
        <Route path="/bot/:id/:url">
            <Bot />  
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch></BrowserRouter>

  );
}

export default App;
