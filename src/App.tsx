import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import { store } from './store/storeConfig';
// import createStore from './reducks/store/store'
import { Provider } from 'react-redux';
import './App.css';

// export const store = createStore()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
