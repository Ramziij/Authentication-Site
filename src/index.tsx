import React from 'react';
import ReactDOM from 'react-dom';
import { StepType, TourProvider } from '@reactour/tour'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const steps:StepType[] = [
  {
    selector: '.first-step',
    content: <button>Open tour</button>,
  },
  {
    selector:'.second-step',
    content:<button>Open tour</button>,
  }
]

ReactDOM.render(
  <TourProvider steps={steps}>
    <App />
  </TourProvider>,
  document.getElementById('root')
)





reportWebVitals();
