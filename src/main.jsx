import ReactDOM from 'react-dom/client'
//React-Router-Dom
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.scss'
// Redux
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from './redux/store.jsx'



//-------------------------------------------------------------------
ReactDOM.createRoot(document.getElementById('root')).render(
      <BrowserRouter>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <App />
          </PersistGate>
        </ReduxProvider>
      </BrowserRouter>
)
