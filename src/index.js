import React from 'react';
import ReactDOM from 'react-dom';
import EventContainer from './containers/EventContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<EventContainer />, document.getElementById('root'));
registerServiceWorker();
