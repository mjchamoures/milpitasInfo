import { injectReducer } from '../../store/reducers';
import { injextReducer } from '../../store/reducers';


export default (store) => ({

  path : 'news',
  /* Async getComponent is only invoked when route matches */
  getComponent (nextState, callback) {
    /* Webpack - use 'require.ensure' to create a split point
       and embed an async module loader (jsonp) when building */
    require.ensure([], (require) => {
      /* Webpack - use require call back to define dependencies for bundling */
      const News = require('./containers/NewsPageContainer').default;
      // const reducer = require('./modules/newsPage').default // TODO

      /* Add the reducer to the store on the key 'newsPage' */
      // injectReducer(store, { key : 'newsPage', reducer }); // TODO

      /* return getComponent */
      callback(null, News);

        /* Webback named bundle */
    }, 'news');   
  }

});