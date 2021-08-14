import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import Layout from './layout.vue';
import store, { key } from './store';
import router from './router';
import Message from './components/message';

const app = createApp(Layout);
// register plugin
app.use(Antd).use(Message as any).use(store, key).use(router);

// mount component to dom
app.mount('#app');