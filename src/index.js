import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/vendor/bootstrap.min.css'
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'assets/css/sass/themes/gogo.light.red.scss';
const rootEl = document.getElementById("root");


let render = () => {
    const MainApp = require('./App').default;
    ReactDOM.render(
      <MainApp />,
      rootEl
    );
};

if (module.hot) {
  module.hot.accept('./App', () => {
      const NextApp = require('./App').default;
      render(
        <NextApp />,
        rootEl
      );
  });
}

render() 