import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WInput',
  setup () {
    return () => <input class="w-input" type="text" placeholder={'请输入内容'}/>;
  }
});