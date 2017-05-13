import App from './App/App';
import Routes from './Routes/Routes';

export default {
  entry: {
    rootComponent: App,
    routes: Routes,
    template: './index.html',
  },

  //  Lifecycle methods
  rootResolve: () => {
    console.log('root resolve');
  },
  afterRouteChange: () => {
    console.log('after route change');
  },
};