import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import './index.css';



// --- Redux & Sagas Middleware Stuff -------------------

// allows us to use reducers!
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import rootReducer from './redux/reducers';

// allows us to use sagas!
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas';

// just for accurate logging of redux ACTIONS
import logger from 'redux-logger';


const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
const middlewareList = process.env.NODE_ENV === 'development' ? [sagaMiddleware, logger] : [sagaMiddleware];


// Create one store that all components can use
const store = createStore(
  rootReducer,
  // adds all middleware to our project including saga and logger
  applyMiddleware(...middlewareList),
);

// This tells the saga middleware to run the watcherSaga 
sagaMiddleware.run(rootSaga);

// --- END Reducer/Saga Stuff -------------------



const root = createRoot( document.getElementById('root') );

// Wrap entire App component in provider
root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);