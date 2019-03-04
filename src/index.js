import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Com from './index_component.js'
ReactDOM.render(<Com/>, document.getElementById('root'));
serviceWorker.unregister();
