import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { theme } from './theme';
import { ConfigProvider } from 'antd';
import {
  BrowserRouter,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
)
