import React from 'react';
import Login from './components/login_component'
import MyAppBar from './components/UI/MyAppBar'
import "./App.css" 

const App: React.FunctionComponent = () => {
  return (
  <div className="container">
    <MyAppBar />
        <div className="aunt">
          <Login />
        </div>
  </div> 
  )
}

export default App;
