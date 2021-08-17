<template>
  <a-card class="app" title="组件展示" hoverable>
    <!--  <todos></todos>-->
    <!--    <a-button type="primary" @click="showMessage">show message</a-button>
        <h2>{{ x }}</h2>
        <h2>{{ y }}</h2>
        <w-transfer>
        </w-transfer>-->
    <w-form>
      <w-form-item>
        <w-input></w-input>
      </w-form-item>
    </w-form>
  </a-card>
</template>

<script lang="ts">

import { defineComponent, ref, toRefs } from 'vue';
import Todos from './components/vuex/todos.vue';
import WTransfer from './components/wTransfer/wTransfer.vue';
import Message from './components/message';
import useMousePosition from './hooks/useMousePosition/useMousePosition';
import WForm from './components/form/form';
import WFormItem from './components/form/formItem';
import WInput from './components/input/input';

function useTransfer () {
  function generateData () {
    const data = [];
    for (let i = 0; i < 15; i++) {
      data.push({
        key: i,
        label: `备选项${i}`,
        disabled: i % 4 === 0
      });
    }
    return ref(data);
  }

  return {
    transferData: generateData(),
    rightValue: [1, 4, 10],
    transferProps: {
      key: 'key',
      label: 'label',
      disabled: 'disabled'
    }
  };
}

export default defineComponent({
  name: 'App',
  components: { WInput, WFormItem, WForm, WTransfer, Todos },
  setup () {
    const info = useTransfer();
    const showMessage = () => {
      Message({ message: 'hhhh' });
    };
    useMousePosition();
    return {
      ...info,
      showMessage,
      ...toRefs(useMousePosition())
    };
  }
});
</script>
