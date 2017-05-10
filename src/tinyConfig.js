import App from './App/App';
import Routes from './Routes/Routes';

//  TODO - extract this out to a file
const template = `
  <!doctype html>
  <html lang="en">
  <head>
    <title><% meta.title %></title>
    <meta name="description" content="<% meta.description %>" />
  </head>
  <body>
    <div id="root"><% appRoot %></div>
    <hr/>
    <script src="/bundle.js"></script>
  </body>
  </html>`;

export default {
  //  Defaults
  rootComponent: App,
  routes: Routes,
  template,

  //  Lifecycle methods
  rootResolve: () => {
    console.log('root resolve');
  },
  beforeRouteChange: () => {
    console.log('before route change');
  },
  afterRouteChange: () => {
    console.log('after route change');
  },
};