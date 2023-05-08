import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
// import createStore from './reducks/store/store'
import { Provider } from 'react-redux';
import './App.css';
import { RecoilRoot } from 'recoil';

// export const store = createStore()

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
