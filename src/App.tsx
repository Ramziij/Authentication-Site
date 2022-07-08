import React from 'react';
import MyAppBar from './components/UI/MyAppBar'
import { Outlet } from "react-router-dom";


const App: React.FunctionComponent = () => {
  return (
    <div>
      <MyAppBar />
      <Outlet />
    </div>
  )
}

export default App;
