import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import Layout from './layout.vue';
import store, { key } from './store';
import router from './router';

createApp(Layout).use(Antd).use(store, key).use(router).mount('#app');
