import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import BrowserRouter from './routes/index'

ReactDOM.render(<App />, document.getElementById('rootz'));
registerServiceWorker();
