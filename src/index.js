import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import ClassCompExample from './ClassCompExample';
// import CompoWillMount from './CompoWillMount';
// import CompoDidMount from './CompoDidMount'
// import ShouldCompoUpdate from './ShouldCompoUpdate';
// import CompoWillUpdate from './CompoWillUpdate';
// import SnapshotBeforeUpdate from './SnapshotBeforeUpdate';
// import PureComponent from './PureComponent';
import EdyodaStories from './EdyodaStories';

ReactDOM.render(
  <React.StrictMode>
    <EdyodaStories />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();