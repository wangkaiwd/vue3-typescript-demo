import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import App from './App.vue';
import store, { key } from './store';

createApp(App).use(Antd).use(store, key).mount('#app');
