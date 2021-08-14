<template>
  <!--  <todos></todos>-->
  <a-button type="primary" @click="showMessage">show message</a-button>
  <w-transfer>
  </w-transfer>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
import Todos from './components/vuex/todos.vue';
import WTransfer from './components/wTransfer/wTransfer.vue';
import Message from './components/message';

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
  components: { WTransfer, Todos },
  setup () {
    const info = useTransfer();
    const showMessage = () => {
      Message({ message: 'hhhh' });
    };
    return {
      ...info,
      showMessage
    };
  }
});
</script>
