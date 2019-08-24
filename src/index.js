import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assests/css/bootstrap.min.css';
import './assests/css/landing-page.min.css'


ReactDOM.render(
    <div>
        <App/>
    </div>,

    document.getElementById('root'));

serviceWorker.unregister();
