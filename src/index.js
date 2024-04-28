import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import UserStore from "./shared/stores/UserStore";
import DeviceStore from "./shared/stores/DeviceStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = createContext(null)

root.render(
  <React.StrictMode>
      <Context.Provider value={{
          user: new UserStore(),
          device: new DeviceStore()
      }}>
          <App />
      </Context.Provider>
  </React.StrictMode>
);