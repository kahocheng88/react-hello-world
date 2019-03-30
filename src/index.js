import React from "react";
import ReactDOM from "react-dom";
import MainContent from './components/mainContent';
import 'bootstrap/dist/css/bootstrap.css';
import './css/mainContent.css';

const element = <h1>Hello World</h1>;

ReactDOM.render(<MainContent />, document.getElementById('root'));
