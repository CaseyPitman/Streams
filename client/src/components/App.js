import React from "react";
import { BrowserRouter, Route, Link} from "react-router-dom";

const PageOne = () => {

  return <h1>Page One</h1>

}

const PageTwo = () => {
  return <h1>Page Two</h1>
}



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path = '/' exact component = {PageOne}/>
          <Route path = '/pagetwo' component = {PageTwo}/>
        </div>
      </BrowserRouter>
    </div>


  )




};

export default App;
