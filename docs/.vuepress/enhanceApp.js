import VueClipboard from 'vue-clipboard2';
import LoadLive2d from './load-live2d';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // ...apply enhancements to the app
  Vue.use(VueClipboard);
  // live2d
  // Vue.use(LoadLive2d);
};
