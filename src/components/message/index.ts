import Message from './message';
import { App } from 'vue';

// Vue component is a virtual node
(Message as any).install = function (app: App) {
  // set global property for all vue property
  app.config.globalProperties.$message = Message;
};
export default Message;