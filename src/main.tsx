import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/main';

import './index.css';
import StoreProvider from '~/providers/storeProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <div className='content'>
        <MainPage />
      </div>
    </StoreProvider>
  </React.StrictMode>,
);
