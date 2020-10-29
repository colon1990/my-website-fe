import React from 'react';
import ReactDOM from 'react-dom';

// import css 
import './index.css';

// import image and mount as variable
// import image_girl from "./assets/images/img_girl.jpg";
// import welcome_logo from "./assets/images/logo-welcome.jpg";

// import function from another file js
// import AppApplication from './App';
// import reportWebVitals from './reportWebVitals';
// import App from "./component/app/App"
import App2 from "./component/app/App2"


// import "./../node_modules/bootstrap/dist/js/bootstrap.js";
// import "./../node_modules/popper.js/dist/popper.js";
// import "./../node_modules/jquery/dist/jquery.slim.min.js";
// import 'https://code.jquery.com/jquery-3.5.1.slim.min.js';
// import 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js';
// import 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js';
// import "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css";


ReactDOM.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(<App/>, document.getElementById('root'));
