<template>
  <div class="w-transfer-panel">
    transfer panel
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'WTransferPanel',
  setup () {
    const state = reactive({});
    return {
      ...toRefs(state)
    };
  },
});
</script>

<style lang="less" scoped>
.w-transfer-panel {

}
</style>