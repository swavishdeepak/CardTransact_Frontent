import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as ReduxProvider } from "react-redux"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { store } from "./redux/store"
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <ToastContainer />
        <App />
      </ReduxProvider>
    </QueryClientProvider>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
