import './polyfills';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Scrivito from 'scrivito';
import './Objs';
import './Widgets';
import App from './App';
import './config';

const appElement = document.getElementById('application');
const prerenderedObjId = appElement.getAttribute('data-scrivito-prerendering-obj-id');

function renderApp() {
  ReactDOM.render(<App />, appElement);
}

if (prerenderedObjId && window.preloadDump) {
  Scrivito.preload(window.preloadDump).then(renderApp);
} else {
  window.prerenderReady = false;
  renderApp();
  Scrivito.finishLoading().then(() => { window.prerenderReady = true; });
}
