import React from 'react';
import Login from './components/login_component'
import MyAppBar from './components/UI/MyAppBar'

const App: React.FunctionComponent = () => {
  return (
  <div className="container">
    <MyAppBar />
        <div className="box">
          <Login />
        </div>
  </div> 
  )
}

export default App;
